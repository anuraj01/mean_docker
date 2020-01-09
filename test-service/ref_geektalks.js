var fs = require('fs');
var http = require('http');
var https = require('https');

var privateKey  = fs.readFileSync('/etc/ssl/private/nginx-selfsigned.key', 'utf8');
var certificate = fs.readFileSync('/etc/ssl/certs/nginx-selfsigned.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var app = express();
var db;
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://slc13qcg.us.oracle.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/getSession', function (req, res) {
          var collection = db.collection('session');
          collection.findOne({_id: "sessions"}, function(err, items) {
                res.send(JSON.stringify(items.session.sort(sortWithDate)));
          });
});
app.get('/getActiveSession', function (req, res) {
          var collection = db.collection('session');
          collection.findOne({_id: "sessions"}, function(err, items) {
                res.send(JSON.stringify(getActiveSession(items.session)));
          });
});
app.post('/addSession', function (req, res) {
        var _data = req.body;
        var collection = db.collection('session');
          collection.update({_id:"sessions"}, {$push:{session:_data}}, {w:1}, function(err, result) {
                   res.send('Success');
        });
});
app.post('/editSession', function (req, res) {
        var _data = req.body;
          var collection = db.collection('session');
          collection.update({_id:"sessions", "session._id" : _data._id}, {$set:{"session.$":_data}}, {w:1}, function(err, result) {
                   res.send('Success');
          });
});
app.post('/removeSession', function (req, res) {
        var _data = req.body;
          var collection = db.collection('session');
          collection.update({}, {$pull: {session: {_id: _data._id}}}, {w:1}, function(err, result) {
                   res.send('Success');
          });
});
app.get('/getTopics', function (req, res) {
          var collection = db.collection('session');
          collection.findOne({_id: "sessions"}, function(err, items) {
                res.send(JSON.stringify(items.topic));
          });
});
app.post('/addTopic', function (req, res) {
        var _data = req.body;
        var collection = db.collection('session');
          collection.update({_id:"sessions"}, {$push:{topic:_data}}, {w:1}, function(err, result) {
                   res.send('Success');
        });
});

app.post('/removeTopic', function (req, res) {
        var _data = req.body;
          var collection = db.collection('session');
          collection.update({}, {$pull: {topic: {_id: _data._id}}}, {w:1}, function(err, result) {
                   res.send('Success');
          });
});

MongoClient.connect("mongodb://localhost:27017/geekTalk", function(err, database) {
        if(err) {  return console.log(err); }
        db = database;
app.listen(3002, function () {
          console.log('Example app listening on port 3003!');
        });
});

function sortWithDate(a, b){
    if(new Date(a.date) > new Date(b.date)) return 1;
    if(new Date(a.date) < new Date(b.date)) return -1;
    else return 0;
}

function getActiveSession(obj){
        var _activeObj = [];
        for(var count = 0; count < obj.length; count++){
                if(new Date(obj[count].date) > new Date()){
                        _activeObj.push(obj[count]);
                }
        }
        return _activeObj.sort(sortWithDate);
}
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpsServer.listen(7443);
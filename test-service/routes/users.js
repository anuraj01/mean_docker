var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var db = null;

MongoClient.connect("mongodb://mongodb:27017/testdb", function(err, database) {
    if(err) { return console.log(err);}
    db = database.db('testdb');
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	if(db === null)  { res.send(JSON.stringify({err: 'ERROR'})); }
    var collection = db.collection('user');
	collection.find({_id: "userList"}).toArray(function(err, items) {
	    res.send(JSON.stringify(items[0].users));
	});
});

module.exports = router;

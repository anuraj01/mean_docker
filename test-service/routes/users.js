var express = require('express');
var router = express.Router();


function getUser() {
	var _users = [];
	for (var count = 0; count < 20; count++){
		_users.push({
			id: count,
			name: 'User' + count,
			country: 'US'
		})
	}
	return _users;
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(getUser());
});

module.exports = router;

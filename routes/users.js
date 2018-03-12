var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/register', function(req, res, next) {
    Student.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET users listing. */
router.post('/login', function(req, res, next) {
    res.send('hello');
});

module.exports = router;

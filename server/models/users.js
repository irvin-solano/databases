var connection = require('../db').dbConnection;
var {db, usernames, messages} = require('./orm.js');

module.exports = {
  getAll: function () {},
  create: function (req, res) {
    console.log('find user' , req.body);
    usernames.sync();
    return usernames.create({user: req.body.username});

    // connection.query('INSERT INTO usernames (user) VALUES (?)', [req.body.username], (err, data) => {
    //   if (err) {
    //     res.sendStatus(404);
    //   } else {
    //     res.sendStatus(201);
    //   }
    // });
  }
};

var connection = require('../db').dbConnection;

module.exports = {
  getAll: function () {},
  create: function (req, res) {
    connection.query('INSERT INTO usernames (user) VALUES (?)', [req.body.username], (err, data) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.sendStatus(201);
      }
    });

  }
};

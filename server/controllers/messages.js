var models = require('../models/messages.js');

module.exports = {
  get: function (req, res) {
    models.getAll((err, data) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(200)
          .json(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.create({message: req.body.message, username: req.body.username, roomname: req.body.roomname}, (err) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.sendStatus(201);
      }
    });
  } // a function which handles posting a message to the database
};

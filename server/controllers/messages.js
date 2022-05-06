var models = require('../models/messages.js');

module.exports = {
  get: function (req, res) {
    models.getAll()
      .then((data) => {
        res.status(200)
          .json(data);
      })
      .catch((err) => {
        res.sendStatus(400);
      });
    // models.getAll((err, data) => {
    //   if (err) {
    //     res.sendStatus(400);
    //   } else {
    //     res.status(200)
    //       .json(data);
    //   }
    // });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.create({message: req.body.message, username: req.body.username, roomname: req.body.roomname})
      .then(() => {
        console.log('success because we did nothing');
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('failure at messages controller');
        res.sendStatus(400);
      });
  } // a function which handles posting a message to the database
};

var models = require('../models/users.js');

module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    //console.log(req, res);
    models.create(req, res)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(() => {
        console.log('Failed to add user in iser controller');
      });
    //sendstatus ->>
  }
};

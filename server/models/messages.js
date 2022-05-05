var connection = require('../db').dbConnection;

module.exports = {
  getAll: function (callback) {
    connection.query('SELECT * FROM messages', (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }, // a function which produces all the messages

  create: function ({message, username, roomname}, callback) {

    connection.query('INSERT INTO messages (message, username, roomname) VALUES (?, ?, ?)', [message, username, roomname], (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  } // a function which can be used to insert a message into the database
};

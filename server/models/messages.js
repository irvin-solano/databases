var connection = require('../db').dbConnection;
var {db, usernames, messages} = require('./orm.js');

module.exports = {
  getAll: function (callback) {
    console.log('this is messagessync!');
    console.log(messages.sync);
    messages.sync();
    return messages.findAll()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log('SYNC failed', err);
      });


    // connection.query('SELECT * FROM messages', (err, data) => {
    //   if (err) {
    //     callback(err);
    //   } else {
    //     callback(null, data);
    //   }
    // });
  }, // a function which produces all the messages

  create: function ({message, username, roomname}, callback) {
    messages.sync();
    return messages.create({ user: username, message: message, roomname: roomname });//{ message: message, user: username, roomname: roomname }
    // connection.query('INSERT INTO messages (message, username, roomname) VALUES (?, ?, ?)', [message, username, roomname], (err) => {
    //   if (err) {
    //     callback(err);
    //   } else {
    //     callback(null);
    //   }
    // });
  } // a function which can be used to insert a message into the database
};

var Sequelize = require('sequelize');
var db = new Sequelize({
  username: 'root',
  password: null,
  database: 'chat',
  host: '127.0.0.1',
  dialect: 'mysql'
});

var usernames = db.define('usernames', {
  user: Sequelize.STRING
});
// {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true}

var messages = db.define('messages', {
  user: Sequelize.STRING,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});
//{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true}
messages.sync();
usernames.sync();

module.exports = {db, usernames, messages};
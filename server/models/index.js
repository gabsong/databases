var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (user_id, room_id) {
      db.dbConnection.query("SELECT message FROM messages WHERE user_id = ? AND room_id = ? ORDER BY ts DESC", [user_id, room_id], (err, results, fields) => {
        if (err) {
          throw err;
        }
        console.log(results);
      });
      db.dbConnection.end();
    }, // a function which produces all the messages

    post: function (message, user_id, room_id) {
      db.dbConnection.query("INSERT INTO messages (message, user_id, room_id) VALUES (?, ?, ?)", [message, user_id, room_id], (err, results, fields) => {
        if (err) {
          throw err;
        }
        console.log(results.insertId);
      });
      db.dbConnection.end();
    }
  },

  users: {
    get: function () {

    },

    post: function (user_name, callback) {
      db.dbConnection.query("INSERT INTO users (name) VALUES (?)", [user_name], (err, results, fields) => {
        if (err) {
          throw err;
        }
        console.log(results.insertId);
      });
      db.dbConnection.end();
    }
  },

  rooms: {
    get: function () {

    },

    post: function (room_name) {
      db.dbConnection.query("INSERT INTO rooms (name) VALUES (?)", [room_name], (err, results, fields) => {
        if (err) {
          throw err;
        }
        console.log(results.insertId);
      });
      db.dbConnection.end();
    }
  }
};
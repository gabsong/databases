var models = require('../models/index.js');

module.exports = {
  messages: {
    get: function (req, res) {

    }, // a function which handles a get request for all messages

    post: function (req, res) {

    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {

    },

    // callback of express.Router.post
    post: function (req, res) {
      models.users.post(req.body.username);
    }
  },
};

// Parse.readAll successCB data format (array of objects)
// [
//   {
//     objectId: "Q3jDBxyLNb",
//     username: "lklk",
//     roomname: "lobby",
//     text: "Yeah",
//     createdAt: "2020-01-10T05:22:27.750Z",
//     updatedAt: "2020-01-10T05:22:27.750Z"
//   }
// ]
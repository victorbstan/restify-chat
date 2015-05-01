var Chat = require('../models/chat.js').Chat;

// ACTIONS

exports.index = function(req, res, next) {
  // fetch existing messages from db
  Chat.find(function(err, data) {
    if (err) {
      return console.error(err);
    }
    res.send(data);
  }).sort('-createdAt').limit(10);

  next();
};

exports.insert = function(req, res, next) {
  // persist data to db
  var chat = new Chat(req.params);
  chat.save(function(err, data) {
    if (err) {
      return console.error(err);
    }
    res.send(200, data);
  });

  next();
};

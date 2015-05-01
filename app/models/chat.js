var mongoose = require('mongoose');

var ChatSchema = mongoose.Schema({
  nickname: {type: String, default: 'Anonymous'},
  body: String,
  createdAt: {type: Date, default: new Date().toISOString()}
});

var Chat = mongoose.model('Chat', ChatSchema);

module.exports = {Chat: Chat};

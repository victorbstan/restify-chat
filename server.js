var restify = require('restify');
var mongoose = require('mongoose');
var Logger = require('bunyan');

var homeCtrl = require('./app/controllers/home_controller.js');
var chatCtrl = require('./app/controllers/chat_controller.js');

// LOGGER

var log = new Logger.createLogger({
  name: 'restify-chat',
  serializers: {
    req: Logger.stdSerializers.req
  }
});

// DB

mongoose.connect('mongodb://localhost/restify-chat');

// SERVER

var server = restify.createServer({
  log: log
});
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

// SERVER CONFIG

server.use(restify.authorizationParser());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.gzipResponse());
server.use(restify.requestLogger());

// FILTERS

server.pre(restify.pre.userAgentConnection()); // for CURL compat
server.pre(function(req, res, next) {
  req.log.info({req: req}, 'REQUEST');
  next();
});

// ROUTES

// chat
server.get('/chat', chatCtrl.index);
server.post('/chat', chatCtrl.insert);

// public
server.get(/\/?.*/, restify.serveStatic({
  directory: './public',
  default: 'index.html'
}));

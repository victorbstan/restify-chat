var fs = require('fs');

// ACTIONS

exports.index = function(req, res, next) {
  fs.readFile('public/index.html', function(err, data) {
    if (err) {
      next(err);
      return;
    }

    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(data);
    next();
  });
};

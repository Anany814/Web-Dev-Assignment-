const http = require('http');
const logger = require('./modules/logger');

const PORT = 3000;

const server = http.createServer(function(req, res) {
  const url = req.url;

  logger.info('Request -> ' + req.method + ' ' + url);

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to Node Server</h1><p><a href="/about">About</a> | <a href="/contact">Contact</a></p>');
    logger.success('200 OK -> /');

  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Page</h1><p>Built with Node.js http module.</p><a href="/">Home</a>');
    logger.success('200 OK -> /about');

  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Contact Page</h1><p>Email: student@example.com</p><a href="/">Home</a>');
    logger.success('200 OK -> /contact');

  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Page Not Found</h1><a href="/">Go Home</a>');
    logger.warn('404 Not Found -> ' + url);
  }
});

server.listen(PORT, function() {
  logger.success('Server running at http://localhost:' + PORT + '/');
  logger.info('Routes: /  /about  /contact');
});

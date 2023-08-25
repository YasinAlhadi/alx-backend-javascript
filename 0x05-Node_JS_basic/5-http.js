const hhtp = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = hhtp.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/students':
      countStudents(process.argv[2]);
      res.end('This is the list of our students\n');
      break;
    case '/':
      res.end('Hello Holberton School!');
      break;
    default:
      res.end();
  }
});

app.listen(port);

module.exports = app;

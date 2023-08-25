const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const hostname = '127.0.0.1';
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res.send(error.message);
    });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const express = require('express');
const router = require('./routes/index');

const app = express();

const hostname = '127.0.0.1';
const port = 1245;

app.use('/', router);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

export default app;

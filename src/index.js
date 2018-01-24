const path = require('path');
const express = require('express');
const app = express();

app.all('/hello', (req, res) => {
  res.status(200);
  res.send('Hello ' + (req.query.name || 'Somebody'));
});

app.all('/picture', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, '../static/node.png'));
});

app.use('/', (req, res) => {
  res.type('text/html');
  res.status(404);
  res.send('The requested URL ' + req.path + ' was not found on this server.');
});

app.listen(8000, () => console.log('Listening on port 8000...'));

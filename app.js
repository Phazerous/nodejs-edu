const express = require('express');
const users = require('./data');

const app = express();

app.use('/user', (req, res, next) => {
  console.log('Someone sent a request!');
  next();
});

app.use('/users', (req, res, next) => {
  res.send(users);
});

app.use('/', (req, res, next) => {
  res.send('<h1>Welcome to home page!</h1>');
});

app.listen(3000);

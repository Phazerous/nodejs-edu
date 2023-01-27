const express = require('express');
const bodyParser = require('body-parser');

const users = require('./data');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', (req, res, next) => {
  console.log('Someone sent a request!');
  next();
});

app.use('/users', (req, res, next) => {
  res.send(users);
});

app.use('/register', (req, res, next) => {
  res.send(`
    <form action="/create-user" method="POST">
      <input type="text" name="username" placeholder="Username" />
      <button type="submit">Register</button>
    </form>
  `);
});

app.use('/create-user', (req, res, next) => {
  console.log(req.body);
});

app.use('/', (req, res, next) => {
  res.send('<h1>Welcome to home page!</h1>');
});

app.listen(3000);

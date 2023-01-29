const path = require('path');

const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('shop');
});

app.listen(3000);

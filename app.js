const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/home', (req, res, next) => {
  res.render('home-page.pug', { pageTitle: 'Home page', path: '/home' });
});

app.listen(3000);

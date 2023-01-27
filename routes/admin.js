const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path');

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  const body = req.body;

  if (!body.product) return;

  console.log(`Product — ${body.product} — was added.`);
});

module.exports = router;

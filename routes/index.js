const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const data = {welcome: 'title'};
  res.json(data);
});

module.exports = router;

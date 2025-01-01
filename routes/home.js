const express = require('express');
const router = express.Router();

// GET /home
router.get('/', (req, res) => {
  res.send('Welcome to the home route!');
});

module.exports = router;

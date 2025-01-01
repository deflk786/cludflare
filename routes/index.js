const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /
router.get('/', (req, res) => {
  
    res.send('Index router');
  
});

module.exports = router;

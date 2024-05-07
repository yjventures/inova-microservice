const express = require('express');
const router = express.Router();
const pdController = require('../controllers/pdController');

router.post('/pd/detect', pdController.detect);

module.exports = router;
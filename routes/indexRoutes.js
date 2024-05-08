const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/api/v1/ping', indexController.ping);

module.exports = router;
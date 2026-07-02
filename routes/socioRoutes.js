const express = require('express');
const router = express.Router();
const socioController = require('../controllers/socioController');

router.get('/', socioController.obtenerSocios);

module.exports = router;
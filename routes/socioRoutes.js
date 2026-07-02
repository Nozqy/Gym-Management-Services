const express = require('express');
const router = express.Router();
const socioController = require('../controllers/socioController');

router.get('/', socioController.obtenerSocios);
router.post('/', socioController.crearSocio);
router.delete('/:id', socioController.eliminarSocio);

module.exports = router;
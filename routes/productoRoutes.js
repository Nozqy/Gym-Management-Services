const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Cuando alguien entre a la ruta principal ('/'), ejecuta obtenerProductos
router.get('/', productoController.obtenerProductos);

module.exports = router;
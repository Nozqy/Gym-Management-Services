const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.get('/', pedidoController.obtenerPedidos);
router.post('/', pedidoController.crearPedido);
router.patch('/:id/completar', pedidoController.completarPedido);
router.delete('/:id', pedidoController.eliminarPedido);

module.exports = router;
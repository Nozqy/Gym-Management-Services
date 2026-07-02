const Pedido = require('../models/Pedido');

exports.obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los pedidos' });
    }
};

exports.crearPedido = async (req, res) => {
    try {
        const nuevoPedido = new Pedido(req.body);
        await nuevoPedido.save();
        res.json({ mensaje: 'Pedido guardado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear el pedido' });
    }
};

// Función para marcar pedido como completado
exports.completarPedido = async (req, res) => {
    try {
        await Pedido.findByIdAndUpdate(req.params.id, { estado: 'completado' });
        res.json({ mensaje: 'Pedido actualizado' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el pedido' });
    }
};

// Función para eliminar un pedido
exports.eliminarPedido = async (req, res) => {
    try {
        await Pedido.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Pedido eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el pedido' });
    }
};
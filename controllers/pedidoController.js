const Pedido = require('../models/Pedido');
const Producto = require('../models/Producto'); 
// Función para obtener todos los pedidos
exports.obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los pedidos' });
    }
};

// Función para crear un nuevo pedido y descontar stock
exports.crearPedido = async (req, res) => {
    try {
        const nuevoPedido = new Pedido(req.body);

        // 2. LÓGICA DE STOCK: Recorremos cada producto dentro del ticket de venta
        for (let item of nuevoPedido.productos) {
            

            // Usamos $inc con un número negativo para restar
            await Producto.findOneAndUpdate(
                { id_producto: item.id_producto }, 
                { $inc: { stock: -item.cantidad } } // Restamos la cantidad
            );
        }

        // 4. Guardamos el ticket en la base de datos
        await nuevoPedido.save();
        res.json({ mensaje: 'Pedido guardado y stock descontado exitosamente' });

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
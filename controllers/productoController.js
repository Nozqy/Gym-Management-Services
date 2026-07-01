const Producto = require('../models/Producto');

// Función para obtener todos los productos
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find(); // Busca todo en la colección
        res.json(productos); // Lo envía como respuesta en formato JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al obtener los productos' });
    }
};
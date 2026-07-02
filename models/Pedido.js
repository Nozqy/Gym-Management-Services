const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    id_socio: { type: String, required: true },
    productos: [{
        id_producto: String,
        nombre: String,
        cantidad: Number,
        precio_unitario: Number
    }],
    fecha_pedido: { type: Date, default: Date.now },
    estado: { type: String },
    total: { type: Number, required: true }
}, {
    collection: 'pedidos',
    versionKey: false
});

module.exports = mongoose.model('Pedido', pedidoSchema);
const mongoose = require('mongoose');

// Definimos el "Molde" (Schema) para los productos
const productoSchema = new mongoose.Schema({
    id_producto: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    categoria: { type: String }
}, {
    // Esto le avisa a Mongoose que use la colección que ya existe
    collection: 'productos',

    versionKey: false 
});


module.exports = mongoose.model('Producto', productoSchema);
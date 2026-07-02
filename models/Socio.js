const mongoose = require('mongoose');

const socioSchema = new mongoose.Schema({
    id_socio: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: String },
    estado_activo: { type: Boolean, default: true },
    membresia_actual: {
        tipo: String,
        precio_mensual: Number,
        fecha_vencimiento: Date
    },
    historial_pagos: Array // Guardamos la lista de pagos como un arreglo
}, {
    collection: 'socios',
    versionKey: false
});

module.exports = mongoose.model('Socio', socioSchema);
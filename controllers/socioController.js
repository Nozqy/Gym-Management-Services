const Socio = require('../models/Socio');

exports.obtenerSocios = async (req, res) => {
    try {
        const socios = await Socio.find();
        res.json(socios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los socios' });
    }
};

// Función para crear un nuevo socio
exports.crearSocio = async (req, res) => {
    try {
        const nuevoSocio = new Socio(req.body);
        await nuevoSocio.save();
        res.json({ mensaje: 'Socio guardado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al registrar el socio' });
    }
};

// Función para eliminar un socio
exports.eliminarSocio = async (req, res) => {
    try {
        await Socio.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Socio eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el socio' });
    }
};
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
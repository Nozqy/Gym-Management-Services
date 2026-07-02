const Socio = require('../models/Socio');

// Función para obtener todos los socios
exports.obtenerSocios = async (req, res) => {
    try {
        const socios = await Socio.find();
        res.json(socios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los socios' });
    }
};

// Función para crear un nuevo socio (con ID automático)
exports.crearSocio = async (req, res) => {
    try {

        const ultimoSocio = await Socio.findOne().sort({ id_socio: -1 });
        
        let nuevoId = "S001"; // ID por defecto si la base de datos está vacía
        
        if (ultimoSocio && ultimoSocio.id_socio) {
            // Extraemos el número 
            const numeroActual = parseInt(ultimoSocio.id_socio.replace('S', ''));
            // Le sumamos 1 y le volvemos a poner la S y los ceros
            nuevoId = "S" + (numeroActual + 1).toString().padStart(3, '0');
        }

        //  Le asignamos este ID automático a los datos que llegaron
        const datosSocio = req.body;
        datosSocio.id_socio = nuevoId;

        //  Guardamos el socio
        const nuevoSocio = new Socio(datosSocio);
        await nuevoSocio.save();
        res.json({ mensaje: 'Socio guardado exitosamente', id_asignado: nuevoId });
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
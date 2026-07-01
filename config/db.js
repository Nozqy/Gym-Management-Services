const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Conecta a tu MongoDB local usando la ruta guardada en el .env

        await mongoose.connect(process.env.MONGO_URI);
        console.log('🟢 Conectado exitosamente a MongoDB (gestor_gimnasio)');
    } catch (err) {
        console.error('🔴 Error al conectar a MongoDB:', err.message);
        
        process.exit(1); // Detiene el servidor si no puede conectarse a la BD
    }
};

module.exports = connectDB;
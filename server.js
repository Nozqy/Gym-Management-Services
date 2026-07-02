const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './var-entorno.env' }); 
const connectDB = require('./config/db');


const app = express();

// Ejecutamos la conexión a la Base de Datos
connectDB();

// Middlewares (Configuraciones de seguridad y formato)
app.use(cors()); // Permite que tu futuro Frontend de React se conecte sin bloqueos
app.use(express.json()); 

// Rutas de la API
app.use('/api/productos', require('./routes/productoRoutes'));
app.use('/api/socios', require('./routes/socioRoutes'));
app.use('/api/pedidos', require('./routes/pedidoRoutes'));

// Ruta de prueba para verificar que el servidor responda
app.get('/', (req, res) => {
    res.send('API del Gestor de Gimnasio funcionando correctamente 🏋️‍♂️');
});


const PORT = process.env.PORT || 5000;

// Levantamos el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
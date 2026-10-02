const express = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/playerRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// URL de conexión a MongoDB local
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/baloncesto_db';

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('🟢 Conectado exitosamente a MongoDB'))
  .catch((err) => console.error('🔴 Error al conectar a MongoDB:', err));

// Rutas de la API
app.use('/api/players', playerRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});

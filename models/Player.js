const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del jugador es obligatorio'],
    trim: true
  },
  equipo: {
    type: String,
    required: [true, 'El equipo es obligatorio'],
    trim: true
  },
  posicion: {
    type: String,
    enum: ['Base', 'Escolta', 'Alero', 'Ala-Pívot', 'Pívot'],
    required: true
  },
  numeroCamiseta: {
    type: Number,
    required: true
  },
  puntosPorPartido: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Player', playerSchema);

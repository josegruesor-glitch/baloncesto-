const Player = require('../models/Player');

// Obtener todos los jugadores
exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los jugadores', error: error.message });
  }
};

// Obtener un jugador por ID
exports.getPlayerById = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ message: 'Jugador no encontrado' });
    }
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el jugador', error: error.message });
  }
};

// Crear un nuevo jugador
exports.createPlayer = async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    const savedPlayer = await newPlayer.save();
    res.status(201).json(savedPlayer);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el jugador', error: error.message });
  }
};

// Actualizar un jugador
exports.updatePlayer = async (req, res) => {
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedPlayer) {
      return res.status(404).json({ message: 'Jugador no encontrado' });
    }
    res.status(200).json(updatedPlayer);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el jugador', error: error.message });
  }
};

// Eliminar un jugador
exports.deletePlayer = async (req, res) => {
  try {
    const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
    if (!deletedPlayer) {
      return res.status(404).json({ message: 'Jugador no encontrado' });
    }
    res.status(200).json({ message: 'Jugador eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el jugador', error: error.message });
  }
};

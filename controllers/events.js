const { response } = require('express');
// const bcrypt = require('bcryptjs');
// const Usuario = require('../models/Usuario');
// const { generarJWT } = require('../helpers/jwt');

const getEventos = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: 'Obtener eventos',
  });
};

const crearEvento = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: 'Crear evento',
  });
};

const actualizarEvento = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: 'Actualizar evento',
  });
};

const eliminarEvento = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: 'Eliminar evento',
  });
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};

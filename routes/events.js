/*
    Event Routes
    /api/events
*/

const { Router } = require('express');
const router = Router();

const { validarJWT } = require('../middlewares/validar-jwt');

const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require('../controllers/events');

// Validar JWT en las peticiones
router.use(validarJWT);

// Obtener eventos
router.get('/', getEventos);

// Crear nuevo evento
router.post('/', crearEvento);

// Actualizar evento
router.put('/:id', actualizarEvento);

// Actualizar evento
router.delete('/:id', eliminarEvento);

module.exports = router;

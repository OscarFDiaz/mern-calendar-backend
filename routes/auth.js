//* Rutas de usuarios
// host + /api/auth

const { Router } = require('express');

const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const { check } = require('express-validator');

router.post(
  '/new',
  [
    // middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
  ],
  crearUsuario,
);

router.post('/', loginUsuario);

router.get('/renew', revalidarToken);

module.exports = router;

const express = require('express');
const path = require('path');
require('dotenv').config();

const { dbConnection } = require('./database/config');

const cors = require('cors');

//* Crear el servidor de express
const app = express();

//* Base de datos
dbConnection();

//* CORS
app.use(cors());

//* Directorio público
app.use(express.static('public'));

//* Lectura y parseo del body
app.use(express.json());

//* Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'));
});

//* Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor en puerto ${process.env.PORT}`);
});

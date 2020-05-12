// Express Code

const express = require('express'); // importar el framework
const cors = require('cors'); // middelware para comunucar backend con frontend
const app = express();

// Sttings
app.set('port', process.env.PORT || 5000); // si existe la variable de entorno la usa, si no usa el puerto 4000

// Middelwares  funciones que se ejecutan antes de que lleguen a las rutas/URLs
app.use(cors());
app.use(express.json()); // para usar formato json

// routes
const items = require('./src/routes/item');
app.use('./src/routes/item.js', items);

// app.get('/api/user', (req, res) => res.send('Users Route'))
// app.get('/api/notes', (req, res) => {res.send('Notes Route')})

module.exports = app; // para luego iniciar el servidor en el archivo index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // middelware para comunucar backend con frontend

const app = express();
const items = require('./src/routes/item');

//Body-Parser Middelware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    //UserCreateIndex: true, // para evitar errores al iniciar la base de datos
  })
  .then(() => console.log('Mongodb Connected...'))
  .catch((err) => console.log(err));

//Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

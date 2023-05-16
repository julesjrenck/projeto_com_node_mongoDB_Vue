const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

const database = require('./config/db.config');

mongoose.Promise = global.Promise;
mongoose.connect(database.local.localUrlDatabse, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('A Base de Dados foi conectada com sucesso!');
  }, (err) => {
    console.log(`Erro ao conectar com a Base de Dados...: ${err}`);
    process.exit();
  });

const index = require('./routes/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(cors());
app.use(morgan('dev'));

app.use(index);

module.exports = app;
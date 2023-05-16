const express = require('express');
const mongoose = require('mongoose');

const database = require('./db.config');

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

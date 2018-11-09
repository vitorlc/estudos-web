const express = require('express');
const bodyParser = require('body-parser');
const db = require('./app/models');
const { Pessoa } = require('./app/models/pessoa');

//Pessoa.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br'});
db.pessoa.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br'});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello Mundo');
});

app.listen(3000);
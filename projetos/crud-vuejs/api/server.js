const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

const db = require('./app/models');

//Rotas
const PessoaRoute = require('./app/route/pessoa');
//const index = require('./app/routes/index');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  //res.header('Access-Control-Allow-Credentials', true)
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use('/', PessoaRoute);

//force: true will drop the table if it already exists
db.sequelize.sync({
  force: true
}).then(() => {
  console.log('Drop and Resync with { force: true }');
});

//Create a server
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server listening at http://%s:%s", host, port)
})
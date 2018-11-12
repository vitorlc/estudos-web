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
const pessoaRoute = new PessoaRoute(app)
//const index = require('./app/routes/index');

//app.use('', pessoaRoute);

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
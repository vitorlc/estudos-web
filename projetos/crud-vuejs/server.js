const express = require('express');
const bodyParser = require('body-parser');
const db = require('./app/models');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});

//Create a server
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})
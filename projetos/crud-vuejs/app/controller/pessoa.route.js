module.exports = function(app) {
 
    const pessoa = require('../controller/pessoa.controller.js');
 
    // Create a new Pessoa
    app.post('/api/pessoa', pessoa.create);
 
    // Retrieve all Pessoa
    app.get('/api/pessoa', pessoa.findAll);
 
    // Retrieve a single Pessoa by Id
    app.get('/api/pessoa/:pessoaId', pessoa.findById);
 
    // Update a Pessoa with Id
    app.put('/api/pessoa/:pessoaId', pessoa.update);
 
    // Delete a Pessoa with Id
    app.delete('/api/pessoa/:pessoaId', pessoa.delete);
}
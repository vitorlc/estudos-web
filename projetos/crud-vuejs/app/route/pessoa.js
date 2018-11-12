module.exports = function(app) {
 
    const pessoas = require('../controller/pessoa.controller');
 
    // Criar nova Pessoa
    app.post('/pessoa', pessoas.create);
 
    // Buscar todas Pessoas
    app.get('/pessoa', pessoas.findAll);
 
    // Buscar uma única Pessoa pelo Id
    app.get('/pessoa/:pessoaId', pessoas.findById);
 
    // Update Pessoa pelo Id
    app.put('/pessoa/:pessoaId', pessoas.update);
 
    // Delete Pessoa pelo Id
    app.delete('/pessoa/:pessoaId', pessoas.delete);
}
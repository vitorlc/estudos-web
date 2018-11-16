var express = require('express');
var router = express.Router(); 
    const pessoa = require('../controller/pessoa.controller');
 
    // Criar nova Pessoa
    router.post('/', pessoa.create);
 
    // Buscar todas Pessoas
    router.get('/', pessoa.findAll);
 
    // Buscar uma única Pessoa pelo Id
    router.get('/:id', pessoa.findById);
 
    // Update Pessoa pelo Id
    router.put('/:id', pessoa.update);
 
    // Delete Pessoa pelo Id
    router.delete('/:id', pessoa.delete);

    module.exports = router;
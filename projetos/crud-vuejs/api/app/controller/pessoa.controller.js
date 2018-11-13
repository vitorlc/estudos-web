const db = require('../models');
const Pessoa = db.pessoa;

// Post a Pessoa
exports.create = (req, res) => {	
	// Save to MySQL database
	Pessoa.create({  
	  name: req.body.name,
	  email: req.body.email,
		idade: req.body.idade,
		endereco: req.body.endereco,
	  sexo: req.body.sexo
		
	}).then(pessoa => {		
		// Send created pessoa to client
		res.send(pessoa);
	});
};
 
// FETCH all Pessoas
exports.findAll = (req, res) => {
	Pessoa.findAll().then(pessoas => {
	  // Envia todas as pessoas para o cliente
	  res.send(pessoas);
	});
};

// Busca pessoa pelo Id
exports.findById = (req, res) => {	
	Pessoa.findById(req.params.pessoaId).then(pessoa => {
		res.send(pessoa);
	})
};
 
// Atualiza Pessoa
exports.update = (req, res) => {
	const id = req.params.pessoaId;
	Pessoa.update( { name: req.body.name, email: req.body.email, idade: req.body.idade }, 
					 { where: {id: req.params.pessoaId} }
				   ).then(() => {
					 res.status(200).send("Atualizado a pessoa com o id = " + id);
				   });
};
 
// Delete pessoa pelo Id
exports.delete = (req, res) => {
	const id = req.params.pessoaId;
	Pessoa.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('Deletado pessoa com id = ' + id);
	});
};
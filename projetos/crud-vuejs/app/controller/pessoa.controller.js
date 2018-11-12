const db = require('../config/database.js');
const Pessoa = db.pessoa;

// Post a Pessoa
exports.create = (req, res) => {	
	// Save to MySQL database
	Pessoa.create({  
	  firstname: req.body.firstname,
	  lastname: req.body.lastname,
	  age: req.body.age
	}).then(pessoa => {		
		// Send created pessoa to client
		res.send(pessoa);
	});
};
 
// FETCH all Pessoas
exports.findAll = (req, res) => {
	Pessoa.findAll().then(pessoas => {
	  // Send all pessoas to Client
	  res.send(pessoas);
	});
};

// Find a Pessoa by Id
exports.findById = (req, res) => {	
	Pessoa.findById(req.params.pessoaId).then(pessoa => {
		res.send(pessoa);
	})
};
 
// Update a Pessoa
exports.update = (req, res) => {
	const id = req.params.pessoaId;
	Pessoa.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }, 
					 { where: {id: req.params.pessoaId} }
				   ).then(() => {
					 res.status(200).send("Atualizado a pessoa com o id = " + id);
				   });
};
 
// Delete a Pessoa by Id
exports.delete = (req, res) => {
	const id = req.params.pessoaId;
	Pessoa.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a pessoa with id = ' + id);
	});
};
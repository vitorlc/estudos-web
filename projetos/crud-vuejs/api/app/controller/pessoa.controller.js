const db = require('../models');
const Pessoa = db.pessoa;

exports.create = async (req, res) => {
	try {
		let pessoa = await Pessoa.create(req.body);
		return res.status(200).send(pessoa);
	} catch(err) {
		console.log(err)
		return res.status(500).send({error: true, msg:"Não foi possível criar pessoa"});
	}
};
 
exports.findAll = async (req, res) => {
	try {
		let pessoas = await Pessoa.findAll();
		return res.status(200).send(pessoas);
	} catch(err) {
		console.log(err);
		return res.status(500).send({error: true, msg:"Não foi possível listar pessoas"});
	}
};

exports.findById = async (req, res) => {
	try {
		let pessoa = await Pessoa.findById(req.params.id);
		console.log("TESTE");
		return res.status(200).send(pessoa);
	} catch(err) {
		console.log(err);
		return res.status(500).send({error: true, msg: "Não foi possível encontrar pessoa"});
	}
};
 
exports.update = async (req, res) => {
	try {
		await Pessoa.update(req.body, { where: {id: req.params.id} });
		return res.status(200).send({error:false, msg: "Pessoa atualizada com sucesso"});
	} catch(err) {
		console.log(err)
		return res.status(500).send({error: true, msg: "Não foi possível atualizar pessoa"});
	}
};
 
exports.delete = async (req, res) => {
	try {
		await Pessoa.destroy({where: { id: req.params.id }});
		return res.status(200).send({error: false, msg: "Pessoa removida com sucesso"});
	} catch(err) {
		console.log(err)
		return res.status(500).send({error: true, msg: "Não foi possível remover pessoa"});
	}
};
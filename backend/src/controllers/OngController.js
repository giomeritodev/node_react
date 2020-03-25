const crypto = require("crypto");
const conn = require("./../database/connection");

module.exports = {

	async index(req, res){
		const ongs = await conn('ongs').select('*');

		return res.json({ongs});
	},

	async store(req, res){
		const { name, email, whatsapp, city, uf } = req.body;
		//Para gerar 5 cracteres aleatórios
		const id = crypto.randomBytes(4).toString('HEX');

		await conn('ongs').insert({
			id, name, email, whatsapp, city, uf
		});

		return res.json({id: id});
	},
};
const connection = require('../database/connection');
const bcrypt = require('bcrypt');

const OngController = {
    async index(req, res) {
        var ongs = [];

        try {
            ongs = await connection('ongs').select('*');
        } catch (error) {
            console.error(error);
            return res.status(500).json("Houve um erro ao listar as ONGs");
        }

        return res.json(ongs);
    },
    async create(req, res) {
        const { name, email, password, whatsapp, city, uf } = req.body;
        var ongId = null;

        try {
            const parsedPassword = await bcrypt.hash(password, 8);

            [ongId] = await connection('ongs').insert({
                name,
                email,
                password: parsedPassword,
                whatsapp,
                city,
                uf
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json(`Houve um erro ao criar a ong ${name}`);
        }

        return res.json(ongId);
    },
    async delete(req, res) {
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        try {
            const incident = await connection('incidents')
                .where('id', id)
                .select('ong_id')
                .first();
        
            if (incident.ong_id != ong_id) {
                return res.status(401).json("Operação não permitida");
            }

            await connection('incidents').where('id', id).delete();   
        } catch (error) {
            return res.status(500).json(`Houve um erro ao deletar o caso ${id}`)
        }

        return res.status(204).send();
    }
}

module.exports = OngController;
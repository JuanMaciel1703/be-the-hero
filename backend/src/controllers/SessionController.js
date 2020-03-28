const connection = require('../database/connection');

const SessionController = {
    async create(req, res) {
        const { id } = req.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();
        
        if (!ong) {
            return res.status(404).json(`Nenhuma ONG encontrada com o ID ${id}.`);
        }
    },
}


module.exports = SessionController;

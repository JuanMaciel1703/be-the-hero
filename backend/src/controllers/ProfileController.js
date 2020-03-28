const connection = require('../database/connection');

const ProfileController = {
    async index(req, res) {
        const ong_id = req.headers.authorization;
        var incidents = [];

        try {
            incidents = await connection('incidents')
                .where('ong_id', ong_id)
                .select('*');   
        } catch (error) {
            console.error(error);
            return res.status(500).json("Houve um erro ao listar os casos dessa ONG.");    
        }
        
        return res.json(incidents)
    }
}

module.exports = ProfileController;
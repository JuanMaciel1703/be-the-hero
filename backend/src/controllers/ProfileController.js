const connection = require('../database/connection');

const ProfileController = {
    async index(req, res) {
        const { page, limit } = req.query;
        const ong_id = req.user.id;
        var incidents = [];

        try {
            
            [count] = await connection('incidents')
            .where('ong_id', ong_id)
            .count();

            incidents = await connection('incidents')
                .where('ong_id', ong_id)
                .limit(limit)
                .offset((page - 1) * limit)
                .select('*');

            res.header('X-Total-Count', count['count(*)'])
   
        } catch (error) {
            console.error(error);
            return res.status(500).json("Houve um erro ao listar os casos dessa ONG.");    
        }
        
        return res.json(incidents)
    }
}

module.exports = ProfileController;
const connection = require('../database/connection');

const IncidentController = {
    async index(req, res) {
        const { page = 1, limit = 5 } = req.query;
        var incidents = [];

        const [count] = await connection('incidents').count();
        
        try {
            incidents = await connection('incidents')
                .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                .limit(limit)
                .offset((page - 1) * limit)
                .select([
                    'incidents.*',
                    'ongs.name',
                    'ongs.email',
                    'ongs.whatsapp',
                    'ongs.city',
                    'ongs.uf'
                ]); 
                
            res.header('X-Total-Count', count['count(*)'])
        } catch (error) {
            console.error(error)
            return res.status(500).json("Houve um erro ao listar os casos");
        }

        return res.json(incidents);
    },
    async create(req, res) {
        const { title, description, value } = req.body;

        var incidentId = null;
        const ong_id = req.user.id;

        try {
            [incidentId] = await connection('incidents').insert({
                title, 
                description, 
                value,
                ong_id
            })

        } catch (error) {
            console.error(error)
            return res.status(500).json(`Houve um erro ao criar o caso ${title}.`)
        }

        return res.json(incidentId);
    },
    async delete(req, res) {
        const { id } = req.params;
        const ongId = req.user.id;

        try {
            const incident = await connection('incidents')
                .where('id', id)
                .select('*')
                .first();

            if (!incident) {
                return res.status(404).json(`Caso não encontrado com o ID ${id}`)
            }
        
            if (incident.ong_id != ongId) {
                return res.status(401).json("Operação não permitida");
            }

            await connection('incidents').where('id', id).delete();   
        } catch (error) {
            return res.status(500).json(`Houve um erro ao deletar o caso ${id}`)
        }

        return res.status(204).send();
    }

}

module.exports = IncidentController;
const jwt = require('jsonwebtoken')
const connection = require('../database/connection');

const auth = async(req, res, next) => {
    try {
        const authorization = req.header('Authorization') 
        if (!authorization) throw new Error("Authorization Token not valid") 
        
        const token = authorization.replace('Bearer ', '')

        const data = jwt.verify(token, process.env.JWT_SECRET)

        const ong = await connection('ongs').select('*')
            .where('id', data.id)
            .andWhere('token', token)
            .first();
        
        if (!ong) {
            return res.status(404).json('Token de autenticação inválido.');
        }

        req.user = ong
        req.token = token
        
        next()
    } catch (error) {
        console.error(error)
        return res.status(401).json('Operação não autorizada.')
    }
}
module.exports = auth
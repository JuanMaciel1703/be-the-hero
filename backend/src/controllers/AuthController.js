const connection = require('../database/connection'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 

const AuthController = {
    async login(req, res) {
        const { email, password } = req.body;

        try {   
            const ong = await connection('ongs')
                .where('email', email)
                .select('*')
                .first();
                
            if (!ong) {
                return res.status(404).json('Não foi possível realizar o login. Verifique as credenciais.');
            }

            const isPasswordMatch = await bcrypt.compare(password, ong.password)
            if (!isPasswordMatch) {
                throw new Error({ error: 'Verifique a senha e tente novamente.' })
            }

            if (ong.token) {
                return res.json(ong);
            }

            const token = jwt.sign({ id: ong.id }, process.env.JWT_SECRET);
            
            await connection('ongs').update('token', token)
                .where('id', ong.id);
                
            return res.json({ ...ong, token })
        } catch (error) {
            console.error(error);
            return res.status(500).json("Houve um erro ao realizar o login.");    
        }
    },
    async logout(req, res) {
        try {        
            await connection('ongs').update('token', null)
                .where('id', req.user.id);
            res.status(204).send();
        } catch (error) {
            console.error(error)
            res.status(500).json("Houve um erro ao realizar o logout.");
        }
    }
}

module.exports = AuthController;
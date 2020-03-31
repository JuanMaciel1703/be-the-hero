const { Router } = require('express');

const authMiddleware = require('./middlewares/auth');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const AuthController = require('./controllers/AuthController');

const routes = Router();

// AUTH ROUTES
routes.post('/login', AuthController.login);
routes.get('/logout', authMiddleware, AuthController.logout);

// ONG ROUTES
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.post('/ongs/:id', OngController.delete);

// INCIDENT ROUTES
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', authMiddleware, IncidentController.create);
routes.delete('/incidents/:id', authMiddleware, IncidentController.delete);

// PROFILE ROUTES
routes.get('/profile', authMiddleware, ProfileController.index);

module.exports = routes;
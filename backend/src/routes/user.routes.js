const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/user.controllers');

// Rota responsável por criar um novo usuário: (POST) localhost:3000/api/v1/register
router.post('/register', userController.registerNewUser);

// Rota responsável por realizar um novo login: (POST) localhost:3000/api/v1/logim
router.post('/login', userController.loginUser);

// Rota responsável por retornar o peril do usuário: (GET) localhost:3000/api/v1/userProfile
router.get('/userProfile', auth, userController.returnUserProfile);

module.exports = router;
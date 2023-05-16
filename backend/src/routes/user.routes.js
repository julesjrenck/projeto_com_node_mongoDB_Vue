const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

// Rota responsável por criar um novo usuário: (POST) localhost:3000/api/v1/register
router.post('/register', userController.registerNewUser);

module.exports = router;
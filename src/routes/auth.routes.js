const { userLogin } = require('../controllers/auth.controllers');
const { Router } = require('express');

const router = Router();

router.post('/auth/login', userLogin);

module.exports = router;
//siempre que agreguemos una ruta debemos usarla en APP.JS =>> (app.use('/direc', Route)
const express = require('express');
const router = express.Router();
const Authservice = require('../services/authService');

router.post('/register', Authservice.createUser);
router.post('/Login', Authservice.LoginUser)

module.exports = router;
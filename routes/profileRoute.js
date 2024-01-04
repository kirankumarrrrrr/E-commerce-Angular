const express = require('express');
const router = express.Router();
const profileService = require('../services/profileService')

router.post('/updateProfile',profileService.updateProfile);
router.post('/getProfile',profileService.getProfile);


module.exports = router;
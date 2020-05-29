const express = require('express');
const router = express.Router();

const adminControllers = require('../controllers/admin.controllers');

const User = require('../model/user');

const db = require('../config');

router.get('/getDoctor', adminControllers.getDoctors);
router.get('/getPatient', adminControllers.getPatient);
router.delete('/deleteUser/:id', adminControllers.deleteUser);
router.put('/verifiedUser', adminControllers.verifiedUser);
router.get('/userProfile/:id', adminControllers.userProfile)

module.exports = router;
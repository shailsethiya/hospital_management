const express = require('express');
const router = express.Router();

const doctorControllers = require('../controllers/doctor.controllers');

const Appointment = require('../model/appointments');

const db = require('../config');

router.get('/getAppointment/:id', doctorControllers.getAppointment);
router.put('/updateStatus', doctorControllers.updateStatus);
router.get('/visitedPatient/:id', doctorControllers.visitedPatient);

module.exports = router;
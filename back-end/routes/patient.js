const express = require('express');
const router = express.Router();

const patientControllers = require('../controllers/patient.controllers');

const Appointment = require('../model/appointments');

const db = require('../config');

router.get('/getDoctors', patientControllers.getDoctors);
router.post('/bookAppintment', patientControllers.bookAppintment);
router.get('/getAppintment/:id', patientControllers.getAppintment);
router.put('/cancelAppintment', patientControllers.cancelAppintment);
router.put('/updateAppointment', patientControllers.updateAppointment);

module.exports = router;
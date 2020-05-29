const patientService = require('../services/patient.services');

exports.getDoctors = (req, res) => {

    patientService.getDoctors(req, function (err, doctors) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json({
                status: 200,
                doctors: doctors
            })
        }
    })
}


exports.bookAppintment = (req, res) => {

    patientService.bookAppintment(req, function (err, appointment) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json({
                status: 200,
                appointment: appointment
            })
        }
    })
}


exports.getAppintment = (req, res) => {

    patientService.getAppintment(req, function (err, appointment) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json({
                status: 200,
                appointments: appointment
            })
        }
    })
}

exports.cancelAppintment = (req, res) => {
    patientService.cancelAppintment(req, function (err, appointment) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json({
                status: 200,
                appointment: appointment
            })
        }
    })
}


exports.updateAppointment = (req, res) => {
    patientService.updateAppointment(req, function (err, appointment) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json({
                status: 200,
                appointments: appointment
            })
        }
    })
}
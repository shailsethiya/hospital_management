// const User = require('../model/user');

const doctorService = require('../services/doctor.services')

exports.getAppointment = (req, res) => {

    doctorService.getAppointment(req, function (err, appointmentList) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json({
                status: 200,
                appointments: appointmentList
            })
        }
    })
}


exports.updateStatus = (req, res) => {
    doctorService.updateStatus(req, function (err, appointment) {
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


exports.visitedPatient = (req, res) => {
    doctorService.visitedPatient(req, function (err, appointmentList) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json({
                status: 200,
                appointments: appointmentList
            })
        }
    })
}

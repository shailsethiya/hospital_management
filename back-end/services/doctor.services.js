const express = require('express');
const db = require('../config');
const Appointment = require('../model/appointments');

exports.getAppointment = function (req, callback) {
    Appointment.find({ doctorId: req.params.id }, function (err, appointment) {
        if (err) {
            return callback(err, null);
        }
        else {
            return callback(null, appointment);
        }
    })
}

exports.updateStatus = function (req, callback) {
    console.log(req.body);
    Appointment.findByIdAndUpdate(req.body._id, { $set: { status: req.body.status } }, { new: true, useFindAndModify: false }, function (err, appointment) {
        if (err) {
            return callback(err, null);
        }
        else {
            return callback(null, appointment);
        }
    })
}


exports.visitedPatient = function (req, callback) {
    Appointment.find({ doctorId: req.params.id, status: "VISITED" }, function (err, appointment) {
        if (err) {
            return callback(err, null);
        }
        else {
            return callback(null, appointment);
        }
    })
}
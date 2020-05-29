const express = require('express');
const db = require('../config');
const { ObjectId } = require('mongodb');
const Appointment = require('../model/appointments');
const Users = require('../model/user');

exports.getDoctors = function (req, callback) {
    Users.find({ role: 'DOCTOR', isVerified: "Y" }, function (err, users) {
        if (err) {
            return callback(err, null);
        }
        else {
            return callback(null, users);
        }
    })
}


exports.bookAppintment = function (req, callback) {
    let appointment = new Appointment(req.body)
    appointment.save(function (err, appointment) {
        if (err) {
            return callback(err, null);
        }
        else {
            return callback(null, appointment);
        }
    })
}


// exports.getAppintment = function (req, callback) {
//     Appointment.find({ 'user._id': req.params.id }, function (err, appointment) {
//         if (err) {
//             return callback(err, null);
//         }
//         else {
//             return callback(null, appointment);
//         }
//     })
// }


module.exports = {
    getAppintment: function (req, callback) {
        Appointment.find({
            'user._id': req.params.id
        }).populate('doctorId')
            .exec(function (err, appointment) {
                if (!err) {
                    return callback(null, appointment)
                }
                return callback(err, null);
            });
    }
},





    exports.cancelAppintment = function (req, callback) {
        Appointment.findByIdAndUpdate(req.body._id, { $set: { status: req.body.status } }, { new: true, useFindAndModify: false }, function (err, appointment) {
            if (err) {
                return callback(err, null);
            }
            else {
                return callback(null, appointment);
            }
        })
    }

exports.updateAppointment = function (req, callback) {
    Appointment.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true, useFindAndModify: false }, function (err, appointment) {
        if (err) {
            return callback(err, null);
        }
        else {
            return callback(null, appointment);
        }
    })
}
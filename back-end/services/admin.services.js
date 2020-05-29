const express = require('express');
const db = require('../config');
const User = require('../model/user');

exports.getDoctors = function (body, callback) {

    let doctor = "DOCTOR"

    User.find({ role: doctor }, function (err, user) {
        if (err) {
            return callback(err, null);
        }
        else {
            return callback(null, user);
        }
    })
}


exports.getPetient = function (body, callback) {

    let doctor = "PATIENT"

    User.find({ role: doctor }, function (err, user) {
        if (err) {
            return callback(err, null);
        }
        else {
            return callback(null, user);
        }
    })
}

exports.deleteUser = function (req, callback) {
    let user = req.params.id;
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) {
            return callback(err, null);
        }
        else {
            return callback(null, user);
        }
    })
}

exports.verifiedUser = function (req, callback) {
    let body = req.body;
    User.findByIdAndUpdate(req.body._id, { $set: { isVerified: req.body.isVerified } }, { new: true, useFindAndModify: false }, function (err, user) {
        if (err) {
            return callback(err, null);
        }
        else {
            return callback(null, user);
        }
    })

}

exports.userProfile = function (req, callback) {
    let user = req.params.id;
    User.findOne({ _id: { $in: req.params.id } }, function (err, user) {
        if (err) {
            return callback(err, null);
        }
        else {
            return callback(null, user);
        }
    })
}
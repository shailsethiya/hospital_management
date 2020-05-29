// const User = require('../model/user');

const adminService = require('../services/admin.services')

exports.getDoctors = (req, res) => {
    // let getDoctors = req.body;
    let body = req.body;

    adminService.getDoctors(body, function (err, doctorListObj) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json({
                status: 200,
                doctors: doctorListObj
            })
        }
    })
}

exports.getPatient = (req, res) => {
    // let getDoctors = req.body;
    let body = req.body;

    adminService.getPetient(body, function (err, patientListObj) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json({
                status: 200,
                patients: patientListObj
            })
        }
    })
}

exports.deleteUser = (req, res) => {
    adminService.deleteUser(req, function (err, user) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json({
                status: 200,
                user: user,
                message: 'User deleted successfully'
            })
        }
    })
}

exports.verifiedUser = (req, res) => {
    adminService.verifiedUser(req, function (err, user) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json({
                status: 200,
                user: user,
                message: 'User verified successfully'
            })
        }
    })
}


exports.userProfile = (req, res) => {
    adminService.userProfile(req, function (err, user) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json({
                status: 200,
                user: user,
            })
        }
    })
}
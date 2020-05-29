const mongoose = require('mongoose');

const Schema = mongoose.Schema

const appointmentsSchema = new Schema({
    doctorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: String,
    status: String,
    user: Object
});

module.exports = mongoose.model('appointment', appointmentsSchema, 'appointments');
const mongoose = require('mongoose');

// Localhost Url
const db = "mongodb://localhost:27017/hospital_management"

// Atlas Url
//const db = "mongodb+srv://root:root@cluster0-npkn9.mongodb.net/hospital_management?retryWrites=true&w=majority";

// Old Url
// const db = "mongodb+srv://root:root@cluster0-npkn9.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(db, err => {
    if (err) {
        console.error('Error' + err);
    }
    else {
        console.log('Connect to mongoDB successfully')
    }
})

module.exports = db;
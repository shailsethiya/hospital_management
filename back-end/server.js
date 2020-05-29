const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const PORT = 3000;

const app = express();

const login_register = require('./routes/api')
const admin = require('./routes/admin');
const doctor = require('./routes/doctor');
const patient = require('./routes/patient');

app.use(bodyParser.json());

app.use(cors());


function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }

    let token = req.headers.authorization.split(' ')[1];

    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }

    let payload = jwt.verify(token, 'secretKey')

    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }

    req.payload = payload.subject
    next()
}



app.use('/', login_register);
app.use('/admin', verifyToken, admin);
app.use('/doctor', verifyToken, doctor);
app.use('/patient', verifyToken, patient);


app.listen(PORT, function () {
    console.log('server running on localhost :' + PORT)
})
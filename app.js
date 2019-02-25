const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');

const financeRoutes = require('./routes/recordRoutes');

const port = process.env.port || 8080;
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api/record', financeRoutes);

mongoose
    .connect(process.env.CONNECTION_STRING, {useNewUrlParser: true})
    .then(result => {
        app.listen(port);
    })
    .catch(err => console.log(err));


const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


// middleware
app.use(express.json())
app.use(cors());

// routes
const tourRoute = require('./routes/v1/tours.route');


app.get('/', (req, res) => {
    res.send('Tour management is ready! YaY!')
})

app.use('/api/v1', tourRoute)

module.exports = app;
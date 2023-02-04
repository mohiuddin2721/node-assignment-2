const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


// middleware
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('Tour management is ready! YaY!')
})

module.exports = app;
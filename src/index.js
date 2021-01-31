"use strict";
const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.set('json spaces', 2);
app.use(express.json());

//routes
app.use('/api/personas',require('../routes/personas'));
app.use('/api/recursos',require('../routes/recursos'));
app.use('/api/planetas',require('../routes/planetas'));
app.use('/api/naves',require('../routes/naves'));
app.use('/api/peliculas',require('../routes/peliculas'));
app.use('/api/animales',require('../routes/animales'));

module.exports.handler = serverless(app);
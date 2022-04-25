const express = require('express');
const todoRouter = require('./routes/todoRoutes')
const morgan = require('morgan');

const app = express();
app.use(express.json());

//enter routes here:
app.use('/api/todos',todoRouter);

module.exports = app;
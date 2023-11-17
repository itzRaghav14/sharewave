const express = require('express');
const app = express();
const PORT = 8000;

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('./config/mongoose');
const morgan = require('morgan');
const helmet = require('helmet');

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// routes
app.use ('/api/users', require('./routes/users'));
app.use ('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log('Server is running on the port:', PORT);
});
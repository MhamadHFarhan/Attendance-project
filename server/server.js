const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require('./db/db');

// app
const app = express();

// middlewaers
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(cors());

// routes middleware

const port = process.env.PORT;

app.listen(port, () => console.log(`your server is ready on ${port} :)`));

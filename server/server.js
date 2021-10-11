const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require('./db/db');

//routers
const usersRouter = require('./routes/routes/users');
const typeRouter = require('./routes/routes/types');
const allInfoRouter = require('./routes/routes/allInfo');
const loginRoute = require('./routes/routes/login');

// app
const app = express();

// middlewaers
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(cors());

// routes middleware
app.use('/users', usersRouter);
app.use('/login', loginRoute);
app.use('/type', typeRouter);
app.use('/allInfo', allInfoRouter);

const port = process.env.PORT;

app.listen(port, () => console.log(`your server is ready on ${port} :)`));

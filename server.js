require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());

app.use('/users', require('./controllers/users.controller'));
app.use('/booking', require('./controllers/booking.controller'));
app.use('/partner', require('./controllers/partner.controller'));
app.use('/agent', require('./controllers/agent.controller'));
app.use('/villas', require('./controllers/villas.controller'));

app.use(errorHandler);

const server = app.listen(process.env.PORT || 5000)

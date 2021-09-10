const config = require('config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user.model'),
    Booking: require('../models/booking.model'),
    Partner: require('../models/partner.model'),
    Agent: require('../models/agent.model'),
    Villa: require('../models/villas.model')
};
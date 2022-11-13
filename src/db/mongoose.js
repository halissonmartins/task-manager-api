const mongoose = require('mongoose');
const validator = require('validator');

//const connectionURL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`;

mongoose.connect(process.env.MONGODB_URL);
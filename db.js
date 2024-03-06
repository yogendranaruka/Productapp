const mongoose = require('mongoose');
require('dotenv').config();
const mongo_uri = process.env.mongo_uri
mongoose.connect(mongo_uri, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to mongodb...'))
    .catch((err) => { throw new Error(err.message) })
mongoose.set('debug', true);



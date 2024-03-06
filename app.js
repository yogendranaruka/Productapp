require('./db');
const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let routes = require('./routes/route');
app.use('/api/', routes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
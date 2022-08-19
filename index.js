const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const config = require('./config/database');
const port =8080;

app.get('/', (req, res) => {
    res.send('Hello World');
}).listen(port, () => {
    console.log('Server started on port ' + port);
}
);



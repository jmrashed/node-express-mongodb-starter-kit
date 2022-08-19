const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 8080;

// log request to console
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
// app.set('views', 'views');


// load assets css, js, images, fonts etc
app.use(express.static(__dirname + '/assets'));
app.use('css', express.static(__dirname + '/assets/css'));
// app.use('js', express.static(__dirname + '/assets/js'));
// app.use('images', express.static(__dirname + '/assets/images'));
// app.use('fonts', express.static(__dirname + '/assets/fonts'));


app.get ('/', (req, res) => {
    // path views\users\index.ejs
    res.render('index');
    // res.render('users.index');
    // res.send('Hello World');
}
).listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log (`url is http://localhost:${PORT}`);
}
);
var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var message = 'Hello World!';

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
    });

app.get('/', function (req, res) {
    res.json({ message: message });
    }
);

app.get('/texto', function (req, res) {
    res.send('Hello World!');
    });

app.post('/setMessage', function (req, res) {
    message = req.body.message;
    res.json({ get: message });
    });
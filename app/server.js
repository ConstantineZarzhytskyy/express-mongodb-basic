var express = require('express');
var router = require('./server.routes.js');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('app'));
app.use('/node_modules', express.static('node_modules'));
app.use('/api', router);

app.listen(8000);

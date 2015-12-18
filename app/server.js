var express = require('express');
var app = express();

app.use('/', express.static('app'));
app.use('/node_modules', express.static('node_modules'));

app.listen(8000);

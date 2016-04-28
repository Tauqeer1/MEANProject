/**
 * Created by Tauqeer Ahmed on 4/28/2016.
 */
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var configDB = require('./server/config/db.config.js');
var port = process.env.PORT || 3000;


var app = express();    //start the express app

mongoose.connect(configDB.url); //database connection
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json()); //parse the json
app.use(morgan('dev')); //log all the requests
app.use(express.static(__dirname + '/client'));
require('./server/routes')(app);


app.listen(port,function(){
    console.log('App running on port ' + port);
});
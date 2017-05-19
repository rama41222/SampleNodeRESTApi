const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const config = require('./app/config/database.js');
mongoose.Promise = bluebird;

var app = express();

mongoose.connect(config.database);
const port = 3000;

mongoose.connection.on('connected',()=>{
	console.log('Successfully connected to the databse : ' + config.database);
});

mongoose.connection.on('error',(err)=>{
	console.log('Successfully connected to the databse : ' + err);
});


app.use(express.static(path.join(__dirname + './public')));

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
	res.json({msg:"SLIIT AF online sample rest api"});
});

app.listen(port,(err)=>{
	if(err){
		console.log(err);
		return;
	}
	console.log('Server successfully started at port : '+ port);

});


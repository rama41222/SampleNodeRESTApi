const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


 var UserSchema = mongoose.Schema({
 	email :{
 		type:  String,
 		required : true
 	},
 	name :{
 		type:String,
 		required: true
 	}
 	
 });

const User = module.exports = mongoose.model('Users',UserSchema);

module.exports.findUserById = (_id,callback)=>{
 	User.findById(_id,callback);
}

module.exports.findUserByEmail= (email,callback)=>{
  	const query = {email : email };
 	User.findOne(query,callback);
}

module.exports.getAllUsers= (callback)=>{
 	User.find(callback);
}

module.exports.removeUser = (_id,callback)=>{
 	User.findByIdAndRemove(new mongoose.mongo.ObjectId(_id),callback);
}

module.exports.updateUser= (updatedUser,callback)=>{
 	updatedUser.save(callback);
}

module.exports.addUser= (newUser,callback)=>{
 	newUser.save(callback);
}






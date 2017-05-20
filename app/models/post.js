const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var PostSchema = new mongoose.Schema({
	topic :{
		type:String,
		required:true
	},
	content:{
		type: String,
		required:true
	},
	author:{
		type: mongoose.Schema.Types.ObjectId,
		ref : 'Users'
	}
});

const Post = module.exports = mongoose.model("Posts",PostSchema);

module.exports.getAllPostsByUser = (_id,callback)=>{
	const query = { author : _id};
	Post.find(query,callback);

}
module.exports.addPost=(newPost, callback)=>{
	newPost.save(callback);

}
module.exports.findPostById=(_id, callback)=>{
	Post.findById(new mongoose.mongo.ObjectId(_id),callback);

}

module.exports.updatePost=(updatedPost, callback)=>{
	updatedPost.save(callback);
}

module.exports.removePost=(_id, callback)=>{
	Post.findByIdAndRemove(new mongoose.mongo.ObjectId(_id),callback);
}


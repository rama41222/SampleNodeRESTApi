const express = require('express');
const router = express.Router();
const Author = require('../models/author.js');
const Post = require('../models/post.js');

router.get('/',(req,res)=>{
	Author.getAllUsers((err, userList)=>{
		if(err){
			console.log(err);
			res.status(500).json({success:false,msg:"Error Occcured"});
		}else{
			res.status(200).json({success:true,userList : userList});
		}

	});
});
router.post('/',(req,res)=>{

	var email = req.body.email;
	var name = req.body.name;

	Author.findUserByEmail(email,(err, user)=>{
		if(err){
			console.log(err);
			res.json({success:false,msg:"Error Occcured"});
		}else if(user.email = ""){
			var author = new Author({
				email : email,
				name : name,
				posts:[],
				comments:[] 
			});

			Author.addUser(author,(err, auth)=>{
				if(err){
					console.log(err);
					res.status(500).json({success:false,msg:"Error Occcured"});
				}else{
					res.status(200).json({success:true,msg:"Successfully registered the user"});
				}
			});
		}else{
			res.status(301).json({success:false,msg:"User Exists"});
		}
	});
});

router.get('/:id/posts',(req,res)=>{
	const user_id = req.params.id;

	Post.getAllPostsByUser(user_id,(err,postList)=>{
		if(err){
			console.log(err);
			res.status(500).json({success:false,msg:"Error Occcured"});
		}else if(postList.length > 0){
			res.status(200).json({success:true,postList :postList });
		}else{
			res.status(200).json({success:false,msg:"No Posts Found"});
		}

	});
});
router.post('/:id/posts',(req,res)=>{});

router.get('/:id/posts/:id',(req,res)=>{});
router.put('/:id/posts/:id',(req,res)=>{});
router.delete('/:id/posts/:id',(req,res)=>{});


router.get('/:id/comments',(req,res)=>{});
router.post('/:id/comments',(req,res)=>{});

router.get('/:id/comments/:id',(req,res)=>{});
router.put('/:id/comments/:id',(req,res)=>{});
router.delete('/:id/comments/:id',(rreq,res)=>{});


module.exports = router;
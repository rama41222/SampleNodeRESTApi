var express = require('express');
var router = express.Router();
var Post = require('../models/post.js');

router.delete('/:id',(req,res)=>{
	const id = req.params.id;
	console.log(id);

	Post.findPostById(id,(err,post)=>{
		if(err){
			console.log(err);
			res.status(500).json({success:false,msg:"Error Occcured"});
		}else if(post._id = ""){

			res.status(200).json({success:false,msg:"Invalid post"});
		}else{
			Post.removePost(id,(err,post)=>{
				if(err){
					console.log(err);
					res.status(500).json({success:false,msg:"Error Occcured"});

				}else{
					res.status(200).json({success:true,msg:"Post deleted Successfully"});
				}
			})
			
		}
	});

});

module.exports = router
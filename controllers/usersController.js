var db=require("../db")

exports.allUsers=function(req,res){
	db.User.find({},function(err,users){
		if(err) res.status(500).send({error:"Failed to get users"});
		res.status(200).send(users);
	})
}

exports.addUser=function(req,res){
	var newUser=new db.User(req.body);
	newUser.save(function(err,user){
		if(err) res.status(500).send({error:"Failed to insert user"});
		res.status(200).send(user);
	})
}


exports.getUser=function(req,res){
	db.User.findById(req.params.id,function(err,user){
		if(err) res.status(500).send({error:"Failed to get user"});
		res.status(200).send(user);
	})
}





exports.deleteUser=function(req,res){
	var userId=req.params.id;
	db.User.findByIdAndRemove(userId,function(err,user){
		if(err) res.status(500).send({error:"Failed to delete user " + JSON.stringify(err)});
		res.status(200).send(user);
	})
}

exports.updateUser=function(req,res){
	var userId=req.params.id;
	db.User.findByIdAndUpdate(userId,req.body,function(err,user){
		if(err) res.status(500).send({error:"Failed to delete user " + JSON.stringify(err)});
		res.status(200).send(user);
	})
}


exports.login=function(req,res){
	var userName=req.body.userName;
	var password=req.body.password;

	db.User.findOne({userName:userName,password:password},function(err,user){
		if(err) res.status(500).send({error:"Failed to find user"});
		if(user){
			res.status(200).send(user);
		}
		else
		{
			res.status(404).send({error:"User not found. Please try with correct credentials"});
		}
	})
}


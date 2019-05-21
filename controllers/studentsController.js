var db=require("../db")

exports.allStudents=function(req,res){
	db.Student.find({},function(err,students){
		if(err) res.status(500).send({error:"Failed to get students"});
		res.status(200).send(students);
	})
}

exports.getStudent=function(req,res){
	db.Student.findById(req.params.id,function(err,student){
		if(err) res.status(500).send({error:"Failed to get student"});
		res.status(200).send(student);
	})
}

exports.addStudent=function(req,res){
	//Create user record first
	var newUser=new db.User({
		userName: req.body.userName,
		password: req.body.password
	})

	newUser.save(function(err,user){
		if(err) res.status(500).send({error:"Failed to insert user:" + JSON.stringify(err)});
		//Create student record
		//Get user id from newely created user
		req.body.userId=user._id;

		var newStudent=new db.Student(req.body);
		newStudent.save(function(err,student){
			if(err) res.status(500).send({error:"Failed to insert student " + JSON.stringify(err)});
			res.status(200).send(student);
		})
	});
}

exports.deleteStudent=function(req,res){
	var studentId=req.params.id;
	db.Student.findByIdAndRemove(studentId,function(err,student){
		if(err) res.status(500).send({error:"Failed to delete student " + JSON.stringify(err)});
		res.status(200).send(student);
	})
}

exports.updateStudent=function(req,res){
	var studentId=req.params.id;
	db.Student.findByIdAndUpdate(studentId,req.body,function(err,student){
		if(err) res.status(500).send({error:"Failed to delete student " + JSON.stringify(err)});
		res.status(200).send(student);
	})
}
var express=require("express");
var router=express.Router();
console.log("Students route")
var studentsController=require("../controllers/studentsController")

router.route("/")
	.get(studentsController.allStudents)
router.route("/:id")
	.get(studentsController.getStudent)
	.delete(studentsController.deleteStudent)
	.put(studentsController.updateStudent)
router.route("/register")
	.post(studentsController.addStudent)



module.exports=router;

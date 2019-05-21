var express=require("express");
var router=express.Router();

var usersController=require("../controllers/usersController")

router.route("/")
	.get(usersController.allUsers)
	.post(usersController.addUser);
router.route("/:id")
	 .get(usersController.getUser);
	 
//  router.route("/userid/userName")
// 	 .get(usersController.getuserid)
	 

// 	.delete(usersController.deleteUser)
//  	.put(usersController.updateUser)
// router.route("/userName")
// 	.get(usersController.getUsers)

router.route("/login")
	.post(usersController.login)





module.exports=router;

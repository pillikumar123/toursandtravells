var mongoose=require("mongoose")

require("dotenv").load()
mongoose.connect(process.env.DB_URL)

//create schema & export model
var studentSchema=mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	userName: {
		type: String,
		required: true,
		unique: true
	},
	terms: {
		type: Boolean,
		default: false
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	createDate: {
		type:Date,
		default: Date.now()
	}
    
})

exports.Student=mongoose.model("Student",studentSchema,"students");

var userSchema=mongoose.Schema({
	userName: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		default: "Student"
	},

   
})

exports.User=mongoose.model("User",userSchema,"users");


var roommateRequestSchema=mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    description: String,
    location: String,
    city: String,
    phone: String,
    gender: String,
    rent: Number,
    numberOfRoommates: Number,
    dateOfRequest: {
        type: Date,
        default: Date.now
    }
})

exports.RoommateRequest=mongoose.model("RoommateRequest",roommateRequestSchema,"roommateRequests")




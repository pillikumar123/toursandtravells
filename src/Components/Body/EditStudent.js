import React, {Component} from 'react'
import {
  Redirect,
  withRouter
} from 'react-router-dom'


class EditStudent extends Component{
	constructor(){
		super();
		this.updateStudent=this.updateStudent.bind(this);
		this.getStudent=this.getStudent.bind(this);
		
		console.log('props:' + JSON.stringify(this.props))
		//var studentId=this.props.match.id;
		//console.log('student id:' + studentId)

		this.state={
			student:{},
			loading:false,
			error:false,
			studentId:0,
			firstName:'',
			lastName:'',
			email:'',
			phone:''
		}
	}

	onChange(){
		this.setState({
			firstName:this.firstName.value,
			lastName:this.lastName.value,
			email:this.email.value,
			phone:this.phone.value,
		})
	}

	componentWillMount(){
		console.log("did mount")
		console.log('props:' + this.props.match.params.id)
		this.setState({
			studentId:this.props.match.params.id
		})

		this.getStudent(this.props.match.params.id)
	}

	getStudent(id){
      	fetch('/api/students/' + id)
		.then((response)=>response.json())
		.then((student)=>{
			console.log(student)
			if(typeof student.error !== 'undefined'){
				this.setState({
					error:true
				})
				alert("Edit Student failure:" + student.error)
			}
			else
			{
				this.setState({
					student:student,
					firstName:student.firstName,
					lastName:student.lastName,
					email:student.email,
					phone:student.phone
				})
			}
		})
		.catch((err)=>{
			console.log(JSON.stringify(err))
		})
	}

	updateStudent(){
		var firstName=this.firstName.value;
		var lastName=this.lastName.value;
		var email=this.email.value;
		var phone=this.phone.value;
        var course=this.course.value;
        var qualification=this.qualification.value;
        var address=this.address.value;
        
		
		var formBody=[];

      	formBody.push(encodeURIComponent("firstName") + "=" + encodeURIComponent(firstName));
      	formBody.push(encodeURIComponent("lastName") + "=" + encodeURIComponent(lastName));
      	formBody.push(encodeURIComponent("email") + "=" + encodeURIComponent(email));
      	formBody.push(encodeURIComponent("phone") + "=" + encodeURIComponent(phone));
        formBody.push(encodeURIComponent("course") + "=" + encodeURIComponent(course));
        formBody.push(encodeURIComponent("qualification") + "=" + encodeURIComponent(qualification));
        formBody.push(encodeURIComponent("address") + "=" + encodeURIComponent(address));
        
      	
      	formBody=formBody.join("&")

      	fetch('/api/students/' + this.state.studentId, {
		  method: "PUT",
		  headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
              },
          body: formBody
		})
		.then((response)=>response.json())
		.then((student)=>{
			console.log(student)
			if(typeof student.error !== 'undefined'){
				this.setState({
					error:true
				})
				alert("Edit Student failure:" + student.error)
			}
			else
			{
				localStorage.setItem('userId', student.userId);
				this.setState({
					student:student,
					loading:true
				})
			}
		})
		.catch((err)=>{
			console.log(JSON.stringify(err))
		})
	}

	render(){

		if(this.state.loading === true){
			return(
				<Redirect to="/admin"/>
			)
		}
		else
		{
			return (
				<main role="main" className="container">
			      <form className="form-signin">
				      	  <br/>
					      <h1 className="h3 mb-3 font-weight-normal">travell Registration</h1>
					      <label forhtml="firstName" className="sr-only">First Name</label>
					      <input ref="firstName" type="text" onChange={this.onChange.bind(this)} ref={(input) => { this.firstName = input; }}  value={this.state.firstName} className="form-control" placeholder="First Name"  required/>
					      <label forhtml="lastName" className="sr-only">Last Name</label>
					      <input ref="lastName" type="text" onChange={this.onChange.bind(this)} ref={(input) => { this.lastName = input; }} value={this.state.lastName} className="form-control" placeholder="Last Name"  required/>
					      <label forhtml="email" className="sr-only">Email</label>
					      <input ref="email" type="text" onChange={this.onChange.bind(this)} ref={(input) => { this.email = input; }} value={this.state.email} className="form-control" placeholder="Email"  required/>
					      <label forhtml="phone" className="sr-only">Phone</label>
					      <input ref="phone" type="text" onChange={this.onChange.bind(this)} ref={(input) => { this.phone = input; }} value={this.state.phone} className="form-control" placeholder="Phone"  required/>
					      <br/>
					      <button onClick={this.updateStudent} className="btn btn-lg btn-primary btn-block" type="button">Update</button>
					</form>
			    </main>
			)
		}
	}
}

export default withRouter(EditStudent)

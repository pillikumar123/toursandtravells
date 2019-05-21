import React, {Component} from 'react'
import {
  Redirect
} from 'react-router-dom'


class Register extends Component{
	constructor(){
		super();
		this.register=this.register.bind(this);

		this.state={
			student:{},
			loading:false,
			error:false,
			
		}
	}

	
	register(){
		
		var firstName=this.refs.firstName.value;
		var lastName=this.refs.lastName.value;
		var email=this.refs.email.value;
		var phone=this.refs.phone.value;
		var userName=this.refs.userName.value;
		var password=this.refs.password.value;
	
		var formBody=[];

      	formBody.push(encodeURIComponent("firstName") + "=" + encodeURIComponent(firstName));
      	formBody.push(encodeURIComponent("lastName") + "=" + encodeURIComponent(lastName));
      	formBody.push(encodeURIComponent("email") + "=" + encodeURIComponent(email));
      	formBody.push(encodeURIComponent("phone") + "=" + encodeURIComponent(phone));
      	formBody.push(encodeURIComponent("userName") + "=" + encodeURIComponent(userName));
      	formBody.push(encodeURIComponent("password") + "=" + encodeURIComponent(password));

      	formBody=formBody.join("&")


      	fetch('/api/students/register', {
		  method: "POST",
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
				alert("Registration failure:" + student.error)
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
				<Redirect to="/Login"/>
			)
		}
		else
		{
			return (
				<div className="wrapper" style={{backgroundImage: 'url("images/bg-registration-form-2.jpg")',paddingTop:'130px'}}>
				<div className="inner">
				  <form action>
					<h3>Registration Form</h3>
					<div className="form-group">
					  <div className="form-wrapper">
						<label htmlFor="firstName">First Name</label>
						<input ref="firstName"type="text" className="form-control" placeholder="First Name"  required/>
					  </div>
					  <div className="form-wrapper">
						<label htmlFor="lastName">Last Name</label>
						<input ref="lastName"type="text" className="form-control" placeholder="Last Name"  required/>
					  </div>
					</div>
					<div className="form-wrapper">
					  <label htmlFor="email">Email</label>
					  <input ref="email" type="text" className="form-control" placeholder="Email"  required/>
					</div>
					<div className="form-wrapper">
					  <label htmlFor="phone">Phone</label>
					  <input ref="phone" type="text" className="form-control"placeholder="Phone"  required />
					</div>

						<div className="form-wrapper">
					  <label htmlFor="userName">userName</label>
					  <input ref="userName" id="inputEmail" type="text" className="form-control" placeholder="Username" required/>
					</div>
					<div className="form-wrapper">
					  <label htmlFor="inputPassword">Password</label>
					  <input ref="password"type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
					</div>
					<div className="form-wrapper">
					  <label htmlFor>Confirm Password</label>
					  <input type="password" className="form-control" />
					</div>
					<div className="checkbox">
					  <label>
						<input type="checkbox" /> I caccept the Terms of Use &amp; Privacy Policy.
						<span className="checkmark" />
					  </label>
					</div>
					<button onClick={this.register} type="button">Register Now</button>
				  </form>
				</div>
			  </div>
			)
		}
	}
}

export default Register;
import React, {Component} from 'react'
import {
  Redirect,
  withRouter
} from 'react-router-dom'


class EditStudent2 extends Component{
	constructor(){
		super();
		this.updateUser=this.updateUser.bind(this);
		this.getUser=this.getUser.bind(this);
		
		
		console.log('props:' + JSON.stringify(this.props))
		//var studentId=this.props.match.id;
		//console.log('student id:' + studentId)

		this.state={
			student:{},
			loading:false,
			error:false,
			userId:0,
			userName:'',
	        password:''
		}
	}

	onChange(){
		this.setState({
			userName:this.userName.value,
			password:this.password.value,

		})
	}

	componentWillMount(){
		console.log("did mount")
		console.log('props:' + this.props.match.params.id)
		this.setState({
			UserId:this.props.match.params.id
		})

		this.getUser(this.props.match.params.id)
	}

	getUser(id){
      	fetch('/api/users/' + id)
		.then((response)=>response.json())
		.then((user)=>{
			console.log(user)
			if(typeof user.error !== 'undefined'){
				this.setState({
					error:true
				})
				alert("Edit user failure:" + user.error)
			}
			else
			{
				this.setState({
					user:user,
					userName:user.userName,
					password:user.password,
								})
			}
		})
		.catch((err)=>{
			console.log(JSON.stringify(err))
		})
	}

	updateUser(){
		var userName=this.userName.value;
		var password=this.password.value;
		
		var formBody=[];

      	formBody.push(encodeURIComponent("userName") + "=" + encodeURIComponent(userName));
      	formBody.push(encodeURIComponent("password") + "=" + encodeURIComponent(password));
      	
      	formBody=formBody.join("&")

      	fetch('/api/users/' + this.state.userId, {
		  method: "PUT",
		  headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
              },
          body: formBody
		})
		.then((response)=>response.json())
		.then((user)=>{
			console.log(user)
			if(typeof user.error !== 'undefined'){
				this.setState({
					error:true
				})
				alert("Edit user failure:" + user.error)
			}
			else
			{
				localStorage.setItem('userId', user.userId);
				this.setState({
					user:user,
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
				<Redirect to="/dashboard"/>
			)
		}
		else
		{
			return (
				<main role="main" className="container">
			      <form className="form-signin">
				      	  <br/>
					      <h1 className="h3 mb-3 font-weight-normal">user Registration</h1>
					      <label forhtml="userName" className="sr-only">user Name</label>
					      <input ref="userName" type="text" onChange={this.onChange.bind(this)} ref={(input) => { this.userName = input; }}  value={this.state.userName} className="form-control" placeholder="userName"  required/>
					      <label forhtml="password" className="sr-only">password</label>
					      <input ref="password"  type="text" onChange={this.onChange.bind(this)} ref={(input) => { this.password = input; }} value={this.state.password} className="form-control" placeholder="password"  required/>
					      
					      <br/>
					      <button onClick={this.updateUser} className="btn btn-lg btn-primary btn-block" type="button">Update</button>
					</form>
			    </main>
			)
		}
	}
}

export default withRouter(EditStudent2)

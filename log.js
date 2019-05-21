import React, {Component} from 'react'

import {
  Redirect
} from 'react-router-dom'

class Login extends Component{
	constructor(){
		super();

		this.state={
            loggedInStatus:false,
            userName:'',
            password:''
        }

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){

        if(e.target.name=="userName"){
            this.setState({
                email:e.target.value
            })
        }

        if(e.target.name=="password"){
            this.setState({
                password:e.target.value
            })
        }

    }
    
    onSubmit(e){
        e.preventDefault();
        var body=`email=${this.state.userName}&password=${this.state.password}`
		fetch('/api/users/login', {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
          })
          .then(resp => resp.json())
          .then(user=> { 
            console.log(JSON.stringify(user))
            
            localStorage.setItem("token",user.token)

            this.setState({
                loggedInStatus:true
            })
          })
          .catch((err)=>{
            console.log(JSON.stringify(err))
            this.props.onRegistrationComplete(false)
            alert("Failed to register, Please try again");
          })
    
    }

	render(){
		if(this.state.loading === true){
			if(this.state.role ==='admin'){
				return(
					<Redirect to="/admin"/>
				)
			}
			else
			{
				return(
					<Redirect to="/dashboard"/>
				)
			}
		}
else
		{
			return (
				<div>
				<div className="limiter">
				  <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")',paddingTop:'130px'}}>
					<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
					  <form className="login100-form validate-form" onSubmit={this.onSubmit.bind(this)}>
						<span className="login100-form-title p-b-49">
						  Login
						</span>
						<div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
						  <span label forhtml="inputEmail" className="label-input100">Username</span>
						  <input ref="userName" value={this.state.userName} onChange={this.onChange} id="inputEmail" className="input100" type="text"  placeholder="username" />
						  <span className="focus-input100" data-symbol="" />
						</div>
						<div className="wrap-input100 validate-input" data-validate="Password is required">
						  <span label forhtml="inputPassword" className="label-input100">Password</span>
						  <input ref="password" type="password" value={this.state.password}  id="inputPassword" className="input100"  placeholder=" password" />
						  <span className="focus-input100" data-symbol="" />
						</div>
						<div className="text-right p-t-8 p-b-31">
						  <a href="#">
							Forgot password?
						  </a>
						</div>
						<button onClick={this.login}  type="button">
							  Login
							</button>
						
						<div className="txt1 text-center p-t-54 p-b-20">
						  <span>
							Or Sign Up Using
						  </span>
						</div>
						<div className="flex-c-m">
						  <a href="https://www.facebook.com" className="login100-social-item bg1">
							<i className="fa fa-facebook" />
						  </a>
						  <a href="https://twitter.com" className="login100-social-item bg2">
							<i className="fa fa-twitter" />
						  </a>
						  <a href="https://google.com" className="login100-social-item bg3">
							<i className="fa fa-google" />
						  </a>
						</div>
						<div className="flex-col-c p-t-155">
						  <span className="txt1 p-b-17">
							Or Sign Up Using
						  </span>
						  <a href="#" className="txt2">
							Sign Up
						  </a>
						</div>
					  </form>
					</div>
				  </div>
				</div>
				<div id="dropDownSelect1" />
			  </div>
				)
		}
	}
}

export default Login
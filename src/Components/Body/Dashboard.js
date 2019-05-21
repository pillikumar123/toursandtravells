import React, {Component} from 'react'
import {
  Redirect
} from 'react-router-dom'


class Dashboard extends Component{
	constructor(props){
		super(props, );

		this.state={
			userId:localStorage.getItem('userId'),
			userName:localStorage.getItem('userName'),
		
		users:[],
		
			 redirectToEdit:false,
			selectedUserId:0


		}
		
this.getUsers=this.getUsers.bind(this)
		}
		getUsers(){
			fetch('/api/users')
			.then((response)=>response.json())
			.then((users)=>{
				console.log(JSON.stringify(users))
				this.setState({
					users:users
				})
				console.log(this);
			})	}
	        
		componentDidMount(){
			this.getUsers();
		}
		

	

	render(){
		
		if(this.state.userId){

			
			return (
			
			
			<main role="main" className="container">
			<h1 className="mt-5">travellx</h1>
			
			<h2> Wlcome to {this.state.userId} </h2>
			


			
			<table>
			<tbody>
				<tr>
					<td>userName</td>
					<td>password</td>	
					
							
							
					
									 
				</tr>
				{
					this.state.users.map((user)=>(
						<tr key={user._id}>
							 <td>{user.userName}</td>
							<td>{user.password}</td> 

												 
					
							{/* <td><button key={user._id} onClick={() => this.editUser(user._id)}>Edit</button></td>
							<td><button key={user._id} onClick={() => this.deleteUser(user._id)}>Delete</button></td> */}
						</tr>
					))
				}
				</tbody>
			</table>
		</main>
			)
		}
		else
		{	
			return (
				<Redirect to="/login"/>
			);
		}
		
	}
	}

export default  Dashboard;
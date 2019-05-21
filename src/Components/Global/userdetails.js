import React, {Component} from 'react'
import {
  Redirect
} from 'react-router-dom'


class userdetails extends Component{
	constructor(){
		super();

		this.state={
			userId:localStorage.getItem('userId'),
			users:[],
			redirectToEdit:false,
			selectedStudentId:0
		}
		this.getUsers=this.getUsers.bind(this)
		this.editUser=this.editUser.bind(this)
		this.deleteUser=this.deleteUser.bind(this)
	}

	deleteUser(id){
		fetch('/api/users/' + id,{method:'DELETE'})
		.then((response)=>response.json())
		.then((student)=>{
			this.getUsers();
		})
	}

	editUser(id){
		console.log('id'+id)
		this.setState({
			redirectToEdit:true,
			selectedUserId: id
		})
	} 

	getUsers(){
		fetch('/api/users')
		.then((response)=>response.json())
		.then((users)=>{
			console.log(JSON.stringify(users))
			this.setState({
				users:users
			})
		})
	}

	componentDidMount(){
		this.getUsers();
	}

	render(){
		if(this.state.redirectToEdit ===true){
			console.log('Redirecting..');
			return(
				<Redirect to={"/editStudent2/"+ this.state.selectedUserId} />
			)
		}
		if(this.state.userId && this.state.userId ==='5c9596168134281c20fc051e'){
			return (
				<main role="main" className="container">
			      <h1 className="mt-5">userdetails</h1>
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
			
                               
                
			      				<td><button key={user._id} onClick={() => this.editStudent(user._id)}>Edit</button></td>
			      				<td><button key={user._id} onClick={() => this.deleteStudent(user._id)}>Delete</button></td>
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
			)
		}
	}
}

export default userdetails
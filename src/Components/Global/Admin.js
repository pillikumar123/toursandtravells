import React, {Component} from 'react'
import {
  Redirect
} from 'react-router-dom'


class Admin extends Component{
	constructor(){
		super();

		this.state={
			userId:localStorage.getItem('userId'),
			students:[],
			redirectToEdit:false,
			selectedStudentId:0
		}
		this.getStudents=this.getStudents.bind(this)
		this.editStudent=this.editStudent.bind(this)
		this.deleteStudent=this.deleteStudent.bind(this)
	}

	deleteStudent(id){
		fetch('/api/students/' + id,{method:'DELETE'})
		.then((response)=>response.json())
		.then((student)=>{
			this.getStudents();
		})
	}

	editStudent(id){
		console.log('id'+id)
		this.setState({
			redirectToEdit:true,
			selectedStudentId: id
		})
	} 

	getStudents(){
		fetch('/api/students')
		.then((response)=>response.json())
		.then((students)=>{
			console.log(JSON.stringify(students))
			this.setState({
				students:students
			})
		})
	}

	componentDidMount(){
		this.getStudents();
	}

	render(){
		if(this.state.redirectToEdit ===true){
			console.log('Redirecting..');
			return(
				<Redirect to={"/editStudent/"+ this.state.selectedStudentId} />
			)
		}
		if(this.state.userId && this.state.userId ==='5c94f0158ba9b31dd88d637b'){
			return (
				<main role="main" className="container">
			      <h1 className="mt-5">Admin</h1>
			      <table>
			      <tbody>
			      	<tr>
			      		<td>First Name</td>
			      		<td>Last Name</td>
			      		<td>Email</td>
			      		<td>Phone</td>
                         
			      	</tr>
			      	{
			      		this.state.students.map((student)=>(
			      			<tr key={student._id}>
			      				<td>{student.firstName}</td>
			      				<td>{student.lastName}</td>
			      				<td>{student.email}</td>
			      				<td>{student.phone}</td>
                               
                
			      				<td><button key={student._id} onClick={() => this.editStudent(student._id)}>Edit</button></td>
			      				<td><button key={student._id} onClick={() => this.deleteStudent(student._id)}>Delete</button></td>
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

export default Admin
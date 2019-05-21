import React, { Component } from 'react'
import Header from '../../Components/Global/Header';
import EditStudent from '../../Components/Body/EditStudent';
import Footer from '../../Components/Global/Footer';

class EditStudentPage extends Component{
	render(){
		return(
            <div>
                <Header />
                <EditStudent />
                <Footer />
            </div>
        )
	}
}

export default EditStudentPage;
import React, { Component } from 'react'
import Header from '../../Components/Global/Header';
import EditStudent2 from '../../Components/Body/EditStudent2';
import Footer from '../../Components/Global/Footer';

class EditStudent2Page extends Component{
	render(){
		return(
            <div>
                <Header />
                <EditStudent2 />
                <Footer />
            </div>
        )
	}
}

export default EditStudent2Page;
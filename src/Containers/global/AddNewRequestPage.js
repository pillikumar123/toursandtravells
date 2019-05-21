import React, { Component } from 'react'
import Header from '../../Components/Global/Header';
import AddRoommateRequest from '../components/Global/AddRoommateRequest';
import Footer from '../../Components/Global/Footer';

class AddNewRequestPage extends Component{
	render(){
		return(
            <div>
                <Header />
                 <AddRoommateRequest/>
                <Footer />
            </div>
        )
	}
}

export default AddNewRequestPage;
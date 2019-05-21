import React, { Component } from 'react'
import Header from '../../Components/Global/Header';
import Register from '../../Components/Global/Register';
import Footer from '../../Components/Global/Footer';

class RegisterPage extends Component{
	render(){
		return(
            <div>
                <Header />
                <Register />
                <Footer />
            </div>
        )
	}
}

export default RegisterPage;
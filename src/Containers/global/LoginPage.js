import React, { Component } from 'react'

import Header from '../../Components/Global/Header';

import Footer from '../../Components/Global/Footer';

import Login from '../../Components/Global/Login';

class LoginPage extends Component{
	render(){
		return(
            <div>
                <Header />

                <Login />
                <Footer />
                
            </div>
        )
	}
}

export default LoginPage;
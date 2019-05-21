import React, { Component } from 'react'
import Header from '../../Components/Global/Header';
import Admin from '../../Components/Global/Admin';
import Footer from '../../Components/Global/Footer';

class AdminPage extends Component{
	render(){
		return(
            <div>
                <Header />
                <Admin />
                <Footer />
            </div>
        )
	}
}

export default AdminPage;
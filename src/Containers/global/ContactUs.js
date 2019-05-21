import React, { Component } from 'react'
import Header from '../../Components/Global/Header';
import Contact from '../../Components/Global/Contact';
import Footer from '../../Components/Global/Footer';

class ContactUs extends Component{
	render(){
		return(
            <div>
                <Header />
                <Contact />
                <Footer />
            </div>
        )
	}
}

export default ContactUs;
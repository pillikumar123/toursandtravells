import React, { Component } from 'react'
import Header from '../../Components/Global/Header';
import About from '../../Components/Global/About';
import Footer from '../../Components/Global/Footer';

class AboutPage extends Component{
	render(){
		return(
            <div>
                <Header />
                <About />
                <Footer />
            </div>
        )
	}
}

export default AboutPage;
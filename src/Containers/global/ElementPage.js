import React, { Component } from 'react'
import Header from '../../Components/Global/Header';
import Elements from '../../Components/Body/Elements';
import Footer from '../../Components/Global/Footer';

class ElementPage extends Component{
	render(){
		return(
            <div>
                <Header />
                <Elements />
                <Footer />
            </div>
        )
	}
}

export default ElementPage;
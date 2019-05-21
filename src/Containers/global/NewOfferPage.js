import React, { Component } from 'react'
import Header from '../../Components/Global/Header';
import Offers from '../../Components/Body/Offers';
import Footer from '../../Components/Global/Footer';

class NewOfferPage extends Component{
	render(){
		return(
            <div>
                <Header />
                <Offers />
                <Footer />
            </div>
        )
	}
}

export default NewOfferPage;
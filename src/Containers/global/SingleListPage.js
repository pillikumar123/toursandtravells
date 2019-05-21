import React, { Component } from 'react'
import Header from '../../Components/Global/Header';
import SingleListing from '../../Components/Body/SingleListing';
import Footer from '../../Components/Global/Footer';

class SingleListPage extends Component{
	render(){
		return(
            <div>
                <Header />
                <SingleListing />
                <Footer />
            </div>
        )
	}
}

export default SingleListPage;
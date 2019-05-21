import React, { Component } from 'react'
import Header from '../../Components/Global/Header';
import userdetails from '../../Components/Global/userdetails';


class userdetailsPage extends Component{
	render(){
		return(
            <div>
                <Header />
                <userdetails/>
                
            </div>
        )
	}
}

export default userdetailsPage;
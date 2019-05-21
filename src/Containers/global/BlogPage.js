import React, { Component } from 'react'
import Header from '../../Components/Global/Header';
import Blog from '../../Components/Body/Blog';
import Footer from '../../Components/Global/Footer';

class BlogPage extends Component{
	render(){
		return(
            <div>
                <Header />
                <Blog />
                <Footer />
            </div>
        )
	}
}

export default BlogPage;
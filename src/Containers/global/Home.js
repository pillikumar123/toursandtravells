import React, { Component } from 'react'
import Header from '../../Components/Global/Header';
import Search from '../../Components/Global/Search';
import Banner from '../../Components/Global/Banner';
import Intro from '../../Components/Body/Intro';
import Cta from '../../Components/Body/Cta';
import Offers from '../../Components/Body/Offers';
import Testimonials from '../../Components/Body/Testimonials';
import TrendingItem from '../../Components/Body/TrendingItem';

import Footer from '../../Components/Global/Footer';

class Home extends Component{
	render(){
		return(
            <div>
                <Header />
                <Banner />
                <Search />
                <Intro />
                <Cta />
                <Offers />
                <Testimonials />
                <TrendingItem />  
                    
                <Footer />
            </div>
        )
	}
}

export default Home;
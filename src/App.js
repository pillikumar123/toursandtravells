import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Containers/global/Home';
import AboutPage from './Containers/global/AboutPage';
import BlogPage from './Containers/global/BlogPage';
import ElementPage from './Containers/global/ElementPage';
import SingleListPage from './Containers/global/SingleListPage';
import NewOfferPage from './Containers/global/NewOfferPage';
import ContactUs from './Containers/global/ContactUs';
import LoginPage from './Containers/global/LoginPage';
import RegisterPage from './Containers/global/RegisterPage'
import DashboardPage from './Containers/global/DashboardPage'
import EditStudentPage from './Containers/global/EditStudentPage'
import AdminPage from './Containers/global/AdminPage'
import userdetailsPage from './Containers/global/userdetailsPage'
import EditStudent2Page from './Containers/global/EditStudent2Page'
//import AddNewRequestPage from './containers/global/AddNewRequestPage'



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/Elements" component={ElementPage} />
          <Route exact path="/SingleListing" component={SingleListPage} />
         <Route exact path="/new_Offers" component={NewOfferPage} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/Register" component={RegisterPage} />
          <Route exact path="/Dashboard" component={DashboardPage} />
          <Route exact path="/EditStudent/:id" component={EditStudentPage} />
          <Route exact path="/EditStudent2/:id" component={EditStudent2Page} />
          <Route exact path="/Admin" component={AdminPage} />
          <Route exact path="/userdetails" component={userdetailsPage} />
          {/* <Route path="/new" component={AddNewRequestPage}/> */}
 
          
        
        </Switch>
      </Router>
    )
  }
}

export default App;

import React, { Component } from 'react'
import axios from 'axios';


class Contact extends Component {
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3001/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }
  
        
    render() {
        return (
            <div>
                <div className="home1">
                    <div className="home_background parallax-window" data-parallax="scroll" data-image-src="images/contact_background.jpg" />
                    <div className="home_content">
                        <div className="home_title">contact</div>
                    </div>
                </div>
                {/* Contact */}
                <div className="contact_form_section">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {/* Contact Form */}
                                <div className="contact_form_container">
                                    <div className="contact_title text-center">get in touch</div>
                                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className="form-control" rows="5" id="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About */}
                <div className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                {/* About - Image */}
                                <div className="about_image">
                                    <img src="images/man.png" alt />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                {/* About - Content */}
                                <div className="about_content">
                                    <div className="logo_container about_logo">
                                        <div className="logo"><a href="#"><img src="images/logo.png" alt />travelix</a></div>
                                    </div>
                                    <p className="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula iaculis consequat nisl. Nunc et suscipit urna pretium.</p>
                                    <ul className="about_social_list">
                                        <li className="about_social_item"><a href="#"><i className="fa fa-pinterest" /></a></li>
                                        <li className="about_social_item"><a href="#"><i className="fa fa-facebook-f" /></a></li>
                                        <li className="about_social_item"><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li className="about_social_item"><a href="#"><i className="fa fa-dribbble" /></a></li>
                                        <li className="about_social_item"><a href="#"><i className="fa fa-behance" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                {/* About Info */}
                                <div className="about_info">
                                    <ul className="contact_info_list">
                                        <li className="contact_info_item d-flex flex-row">
                                            <div><div className="contact_info_icon"><img src="images/placeholder.svg" alt /></div></div>
                                            <div className="contact_info_text">4127 Raoul Wallenber 45b-c Gibraltar</div>
                                        </li>
                                        <li className="contact_info_item d-flex flex-row">
                                            <div><div className="contact_info_icon"><img src="images/phone-call.svg" alt /></div></div>
                                            <div className="contact_info_text">2556-808-8613</div>
                                        </li>
                                        <li className="contact_info_item d-flex flex-row">
                                            <div><div className="contact_info_icon"><img src="images/message.svg" alt /></div></div>
                                            <div className="contact_info_text"><a href="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</a></div>
                                        </li>
                                        <li className="contact_info_item d-flex flex-row">
                                            <div><div className="contact_info_icon"><img src="images/planet-earth.svg" alt /></div></div>
                                            <div className="contact_info_text"><a href="https://colorlib.com">www.colorlib.com</a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Google Map */}
                <div className="travelix_map">
                    <div id="google_map" className="google_map">
                        <div className="map_container">
                            <div id="map" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
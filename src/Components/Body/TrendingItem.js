import React, { Component } from 'react'

class TrendingItem extends Component {
    render() {
        return (
            <div className="trending">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2 className="section_title">trending now</h2>
                        </div>
                    </div>
                    <div className="row trending_container">
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src="images/trend_1.png" alt="https://unsplash.com/@fransaraco" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">grand hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src="images/trend_2.png" alt="https://unsplash.com/@grovemade" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">mars hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src="images/trend_3.png" alt="https://unsplash.com/@jbriscoe" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">queen hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src="images/trend_4.png" alt="https://unsplash.com/@oowgnuj" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">mars hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src="images/trend_5.png" alt="https://unsplash.com/@mindaugas" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">grand hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src="images/trend_6.png" alt="https://unsplash.com/@itsnwa" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">mars hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src="images/trend_7.png" alt="https://unsplash.com/@rktkn" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">queen hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src="images/trend_8.png" alt="https://unsplash.com/@thoughtcatalog" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">mars hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_form_section">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {/* Contact Form */}
                                <div className="contact_form_container">
                                    <div className="contact_title text-center">get in touch</div>
                                    <form action="#" id="contact_form" className="contact_form text-center">
                                        <input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Name" required="required" data-error="Name is required." />
                                        <input type="text" id="contact_form_email" className="contact_form_email input_field" placeholder="E-mail" required="required" data-error="Email is required." />
                                        <input type="text" id="contact_form_subject" className="contact_form_subject input_field" placeholder="Subject" required="required" data-error="Subject is required." />
                                        <textarea id="contact_form_message" className="text_field contact_form_message" name="message" rows={4} placeholder="Message" required="required" data-error="Please, write us a message." defaultValue={""} />
                                        <button type="submit" id="form_submit_button" className="form_submit_button button trans_200">send message<span /><span /><span /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrendingItem;
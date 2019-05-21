import React, { Component } from 'react'

class SingleListing extends Component {
      render() {
            return (
                <div>
                <div className="home1">
                  <div className="home_background parallax-window" data-parallax="scroll" data-image-src="images/single_background.jpg" />
                  <div className="home_content">
                    <div className="home_title">the offers</div>
                  </div>
                </div>
                {/* Offers */}
                <div className="listing">
                  {/* Search */}
                  <div className="search">
                    <div className="search_inner">
                      {/* Search Contents */}
                      <div className="container fill_height no-padding">
                        <div className="row fill_height no-margin">
                          <div className="col fill_height no-padding">
                            {/* Search Tabs */}
                            <div className="search_tabs_container">
                              <div className="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                <div className="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/suitcase.png" alt /><span>hotels</span></div>
                                <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/bus.png" alt />car rentals</div>
                                <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/departure.png" alt />flights</div>
                                <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/island.png" alt />trips</div>
                                <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/cruise.png" alt />cruises</div>
                                <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/diving.png" alt />activities</div>
                              </div>		
                            </div>
                            {/* Search Panel */}
                            <div className="search_panel active">
                              <form action="#" id="search_form_1" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                <div className="search_item">
                                  <div>destination</div>
                                  <input type="text" className="destination search_input" required="required" />
                                </div>
                                <div className="search_item">
                                  <div>check in</div>
                                  <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                                </div>
                                <div className="search_item">
                                  <div>check out</div>
                                  <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                                </div>
                                <div className="search_item">
                                  <div>adults</div>
                                  <select name="adults" id="adults_1" className="dropdown_item_select search_input">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                                <div className="search_item">
                                  <div>children</div>
                                  <select name="children" id="children_1" className="dropdown_item_select search_input">
                                    <option>0</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                                <div className="extras">
                                  <ul className="search_extras clearfix">
                                    <li className="search_extras_item">
                                      <div className="clearfix">
                                        <input type="checkbox" id="search_extras_1" className="search_extras_cb" />
                                        <label htmlFor="search_extras_1">Pet Friendly</label>
                                      </div>	
                                    </li>
                                    <li className="search_extras_item">
                                      <div className="clearfix">
                                        <input type="checkbox" id="search_extras_2" className="search_extras_cb" />
                                        <label htmlFor="search_extras_2">Car Parking</label>
                                      </div>
                                    </li>
                                    <li className="search_extras_item">
                                      <div className="clearfix">
                                        <input type="checkbox" id="search_extras_3" className="search_extras_cb" />
                                        <label htmlFor="search_extras_3">Wireless Internet</label>
                                      </div>
                                    </li>
                                    <li className="search_extras_item">
                                      <div className="clearfix">
                                        <input type="checkbox" id="search_extras_4" className="search_extras_cb" />
                                        <label htmlFor="search_extras_4">Reservations</label>
                                      </div>
                                    </li>
                                    <li className="search_extras_item">
                                      <div className="clearfix">
                                        <input type="checkbox" id="search_extras_5" className="search_extras_cb" />
                                        <label htmlFor="search_extras_5">Private Parking</label>
                                      </div>
                                    </li>
                                    <li className="search_extras_item">
                                      <div className="clearfix">
                                        <input type="checkbox" id="search_extras_6" className="search_extras_cb" />
                                        <label htmlFor="search_extras_6">Smoking Area</label>
                                      </div>
                                    </li>
                                    <li className="search_extras_item">
                                      <div className="clearfix">
                                        <input type="checkbox" id="search_extras_7" className="search_extras_cb" />
                                        <label htmlFor="search_extras_7">Wheelchair Accessible</label>
                                      </div>
                                    </li>
                                    <li className="search_extras_item">
                                      <div className="clearfix">
                                        <input type="checkbox" id="search_extras_8" className="search_extras_cb" />
                                        <label htmlFor="search_extras_8">Pool</label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="more_options">
                                  <div className="more_options_trigger">
                                    <a href="#">load more options</a>
                                  </div>
                                  <ul className="more_options_list clearfix">
                                    <li className="more_options_item">
                                      <div className="clearfix">
                                        <input type="checkbox" id="more_options_1" className="search_extras_cb" />
                                        <label htmlFor="more_options_1">Pet Friendly</label>
                                      </div>	
                                    </li>
                                    <li className="more_options_item">
                                      <div className="clearfix">
                                        <input type="checkbox" id="more_options_2" className="search_extras_cb" />
                                        <label htmlFor="more_options_2">Car Parking</label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <button className="button search_button">search<span /><span /><span /></button>
                              </form>
                            </div>
                            {/* Search Panel */}
                            <div className="search_panel">
                              <form action="#" id="search_form_2" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                <div className="search_item">
                                  <div>destination</div>
                                  <input type="text" className="destination search_input" required="required" />
                                </div>
                                <div className="search_item">
                                  <div>check in</div>
                                  <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                                </div>
                                <div className="search_item">
                                  <div>check out</div>
                                  <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                                </div>
                                <div className="search_item">
                                  <div>adults</div>
                                  <select name="adults" id="adults_2" className="dropdown_item_select search_input">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                                <div className="search_item">
                                  <div>children</div>
                                  <select name="children" id="children_2" className="dropdown_item_select search_input">
                                    <option>0</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                                <button className="button search_button">search<span /><span /><span /></button>
                              </form>
                            </div>
                            {/* Search Panel */}
                            <div className="search_panel">
                              <form action="#" id="search_form_3" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                <div className="search_item">
                                  <div>destination</div>
                                  <input type="text" className="destination search_input" required="required" />
                                </div>
                                <div className="search_item">
                                  <div>check in</div>
                                  <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                                </div>
                                <div className="search_item">
                                  <div>check out</div>
                                  <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                                </div>
                                <div className="search_item">
                                  <div>adults</div>
                                  <select name="adults" id="adults_3" className="dropdown_item_select search_input">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                                <div className="search_item">
                                  <div>children</div>
                                  <select name="children" id="children_3" className="dropdown_item_select search_input">
                                    <option>0</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                                <button className="button search_button">search<span /><span /><span /></button>
                              </form>
                            </div>
                            {/* Search Panel */}
                            <div className="search_panel">
                              <form action="#" id="search_form_4" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                <div className="search_item">
                                  <div>destination</div>
                                  <input type="text" className="destination search_input" required="required" />
                                </div>
                                <div className="search_item">
                                  <div>check in</div>
                                  <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                                </div>
                                <div className="search_item">
                                  <div>check out</div>
                                  <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                                </div>
                                <div className="search_item">
                                  <div>adults</div>
                                  <select name="adults" id="adults_4" className="dropdown_item_select search_input">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                                <div className="search_item">
                                  <div>children</div>
                                  <select name="children" id="children_4" className="dropdown_item_select search_input">
                                    <option>0</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                                <button className="button search_button">search<span /><span /><span /></button>
                              </form>
                            </div>
                            {/* Search Panel */}
                            <div className="search_panel">
                              <form action="#" id="search_form_5" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                <div className="search_item">
                                  <div>destination</div>
                                  <input type="text" className="destination search_input" required="required" />
                                </div>
                                <div className="search_item">
                                  <div>check in</div>
                                  <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                                </div>
                                <div className="search_item">
                                  <div>check out</div>
                                  <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                                </div>
                                <div className="search_item">
                                  <div>adults</div>
                                  <select name="adults" id="adults_5" className="dropdown_item_select search_input">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                                <div className="search_item">
                                  <div>children</div>
                                  <select name="children" id="children_5" className="dropdown_item_select search_input">
                                    <option>0</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                                <button className="button search_button">search<span /><span /><span /></button>
                              </form>
                            </div>
                            {/* Search Panel */}
                            <div className="search_panel">
                              <form action="#" id="search_form_6" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                <div className="search_item">
                                  <div>destination</div>
                                  <input type="text" className="destination search_input" required="required" />
                                </div>
                                <div className="search_item">
                                  <div>check in</div>
                                  <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                                </div>
                                <div className="search_item">
                                  <div>check out</div>
                                  <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                                </div>
                                <div className="search_item">
                                  <div>adults</div>
                                  <select name="adults" id="adults_6" className="dropdown_item_select search_input">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                                <div className="search_item">
                                  <div>children</div>
                                  <select name="children" id="children_6" className="dropdown_item_select search_input">
                                    <option>0</option>
                                    <option>02</option>
                                    <option>03</option>
                                  </select>
                                </div>
                                <button className="button search_button">search<span /><span /><span /></button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>	
                    </div>	
                  </div>
                  {/* Single Listing */}
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="single_listing">
                          {/* Hotel Info */}
                          <div className="hotel_info">
                            {/* Title */}
                            <div className="hotel_title_container d-flex flex-lg-row flex-column">
                              <div className="hotel_title_content">
                                <h1 className="hotel_title">Grand Hotel Eurostar</h1>
                                <div className="rating_r rating_r_4 hotel_rating">
                                  <i />
                                  <i />
                                  <i />
                                  <i />
                                  <i />
                                </div>
                                <div className="hotel_location">345 677 Gran Via Street, no 34, Madrid, Spain</div>
                              </div>
                              <div className="hotel_title_button ml-lg-auto text-lg-right">
                                <div className="button book_button trans_200"><a href="#">book<span /><span /><span /></a></div>
                                <div className="hotel_map_link_container">
                                  <div className="hotel_map_link">See Location on Map</div>
                                </div>
                              </div>
                            </div>
                            {/* Listing Image */}
                            <div className="hotel_image">
                              <img src="images/listing_hotel.jpg" alt />
                              <div className="hotel_review_container d-flex flex-column align-items-center justify-content-center">
                                <div className="hotel_review">
                                  <div className="hotel_review_content">
                                    <div className="hotel_review_title">very good</div>
                                    <div className="hotel_review_subtitle">100 reviews</div>
                                  </div>
                                  <div className="hotel_review_rating text-center">8.1</div>
                                </div>
                              </div>
                            </div>
                            {/* Hotel Gallery */}
                            <div className="hotel_gallery">
                              <div className="hotel_slider_container">
                                <div className="owl-carousel owl-theme hotel_slider">
                                  {/* Hotel Gallery Slider Item */}
                                  <div className="owl-item">
                                    <a className="colorbox cboxElement" href="images/listing_1.jpg">
                                      <img src="images/listing_thumb_1.jpg" alt="https://unsplash.com/@jbriscoe" />
                                    </a>
                                  </div>
                                  {/* Hotel Gallery Slider Item */}
                                  <div className="owl-item">
                                    <a className="colorbox cboxElement" href="images/listing_2.jpg">
                                      <img src="images/listing_thumb_2.jpg" alt="https://unsplash.com/@grovemade" />
                                    </a>
                                  </div>
                                  {/* Hotel Gallery Slider Item */}
                                  <div className="owl-item">
                                    <a className="colorbox cboxElement" href="images/listing_3.jpg">
                                      <img src="images/listing_thumb_3.jpg" alt="https://unsplash.com/@fransaraco" />
                                    </a>
                                  </div>
                                  {/* Hotel Gallery Slider Item */}
                                  <div className="owl-item">
                                    <a className="colorbox cboxElement" href="images/listing_4.jpg">
                                      <img src="images/listing_thumb_4.jpg" alt="https://unsplash.com/@workweek" />
                                    </a>
                                  </div>
                                  {/* Hotel Gallery Slider Item */}
                                  <div className="owl-item">
                                    <a className="colorbox cboxElement" href="images/listing_5.jpg">
                                      <img src="images/listing_thumb_5.jpg" alt="https://unsplash.com/@workweek" />
                                    </a>
                                  </div>
                                  {/* Hotel Gallery Slider Item */}
                                  <div className="owl-item">
                                    <a className="colorbox cboxElement" href="images/listing_6.jpg">
                                      <img src="images/listing_thumb_6.jpg" alt="https://unsplash.com/@avidenov" />
                                    </a>
                                  </div>
                                  {/* Hotel Gallery Slider Item */}
                                  <div className="owl-item">
                                    <a className="colorbox cboxElement" href="images/listing_7.jpg">
                                      <img src="images/listing_thumb_7.jpg" alt="https://unsplash.com/@pietruszka" />
                                    </a>
                                  </div>
                                  {/* Hotel Gallery Slider Item */}
                                  <div className="owl-item">
                                    <a className="colorbox cboxElement" href="images/listing_8.jpg">
                                      <img src="images/listing_thumb_8.jpg" alt="https://unsplash.com/@rktkn" />
                                    </a>
                                  </div>
                                  {/* Hotel Gallery Slider Item */}
                                  <div className="owl-item">
                                    <a className="colorbox cboxElement" href="images/listing_9.jpg">
                                      <img src="images/listing_thumb_9.jpg" alt="https://unsplash.com/@mindaugas" />
                                    </a>
                                  </div>
                                </div>
                                {/* Hotel Slider Nav - Prev */}
                                <div className="hotel_slider_nav hotel_slider_prev">
                                  <svg version="1.1" id="Layer_6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                                    <defs>
                                      <linearGradient id="hotel_grad_prev">
                                        <stop offset="0%" stopColor="#fa9e1b" />
                                        <stop offset="100%" stopColor="#8d4fff" />
                                      </linearGradient>
                                    </defs>
                                    <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                                                    M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                                                    C22.545,2,26,5.541,26,9.909V23.091z" />
                                    <polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
                                                    11.042,18.219 " />
                                  </svg>
                                </div>
                                {/* Hotel Slider Nav - Next */}
                                <div className="hotel_slider_nav hotel_slider_next">
                                  <svg version="1.1" id="Layer_7" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                                    <defs>
                                      <linearGradient id="hotel_grad_next">
                                        <stop offset="0%" stopColor="#fa9e1b" />
                                        <stop offset="100%" stopColor="#8d4fff" />
                                      </linearGradient>
                                    </defs>
                                    <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                                                M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                                                C22.545,2,26,5.541,26,9.909V23.091z" />
                                    <polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
                                                17.046,15.554 " />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            {/* Hotel Info Text */}
                            <div className="hotel_info_text">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum. Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum quam placerat non. Etiam venenatis nibh augue, sed eleifend justo tristique eu</p>
                            </div>
                            {/* Hotel Info Tags */}
                            <div className="hotel_info_tags">
                              <ul className="hotel_icons_list">
                                <li className="hotel_icons_item"><img src="images/post.png" alt /></li>
                                <li className="hotel_icons_item"><img src="images/compass.png" alt /></li>
                                <li className="hotel_icons_item"><img src="images/bicycle.png" alt /></li>
                                <li className="hotel_icons_item"><img src="images/sailboat.png" alt /></li>
                              </ul>
                            </div>
                          </div>
                          {/* Rooms */}
                          <div className="rooms">
                            {/* Room */}
                            <div className="room">
                              {/* Room */}
                              <div className="row">
                                <div className="col-lg-2">
                                  <div className="room_image"><img src="images/room_1.jpg" alt="https://unsplash.com/@grovemade" /></div>
                                </div>
                                <div className="col-lg-7">
                                  <div className="room_content">
                                    <div className="room_title">Double or Twin Room</div>
                                    <div className="room_price">$99/night</div>
                                    <div className="room_text">FREE cancellation before 23:59 on 20 December 2017</div>
                                    <div className="room_extra">Breakfast $7.50</div>
                                  </div>
                                </div>
                                <div className="col-lg-3 text-lg-right">
                                  <div className="room_button">
                                    <div className="button book_button trans_200"><a href="#">book<span /><span /><span /></a></div>
                                  </div>
                                </div>
                              </div>	
                            </div>
                            {/* Room */}
                            <div className="room">
                              {/* Room */}
                              <div className="row">
                                <div className="col-lg-2">
                                  <div className="room_image"><img src="images/room_2.jpg" alt="https://unsplash.com/@oowgnuj" /></div>
                                </div>
                                <div className="col-lg-7">
                                  <div className="room_content">
                                    <div className="room_title">Double or Twin Room</div>
                                    <div className="room_price">$99/night</div>
                                    <div className="room_text">FREE cancellation before 23:59 on 20 December 2017</div>
                                    <div className="room_extra">Breakfast $7.50</div>
                                  </div>
                                </div>
                                <div className="col-lg-3 text-lg-right">
                                  <div className="room_button">
                                    <div className="button book_button trans_200"><a href="#">book<span /><span /><span /></a></div>
                                  </div>
                                </div>
                              </div>	
                            </div>
                          </div>
                          {/* Reviews */}
                          <div className="reviews">
                            <div className="reviews_title">reviews</div>
                            <div className="reviews_container">
                              {/* Review */}
                              <div className="review">
                                <div className="row">
                                  <div className="col-lg-1">
                                    <div className="review_image">
                                      <img src="images/review_1.jpg" alt="https://unsplash.com/@saaout" />
                                    </div>
                                  </div>
                                  <div className="col-lg-11">
                                    <div className="review_content">
                                      <div className="review_title_container">
                                        <div className="review_title">"We loved the services"</div>
                                        <div className="review_rating">9.5</div>
                                      </div>
                                      <div className="review_text">
                                        <p>Tetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum.</p>
                                      </div>
                                      <div className="review_name">Christinne Smith</div>
                                      <div className="review_date">12 November 2017</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Review */}
                              <div className="review">
                                <div className="row">
                                  <div className="col-lg-1">
                                    <div className="review_image">
                                      <img src="images/review_2.jpg" alt="Image by Andrew Robles" />
                                    </div>
                                  </div>
                                  <div className="col-lg-11">
                                    <div className="review_content">
                                      <div className="review_title_container">
                                        <div className="review_title">"Nice staff and great location"</div>
                                        <div className="review_rating">9.5</div>
                                      </div>
                                      <div className="review_text">
                                        <p>Tetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum.</p>
                                      </div>
                                      <div className="review_name">Christinne Smith</div>
                                      <div className="review_date">12 November 2017</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Location on Map */}
                          <div className="location_on_map">
                            <div className="location_on_map_title">location on map</div>
                            {/* Google Map */}
                            <div className="travelix_map">
                              <div id="google_map" className="google_map">
                                <div className="map_container">
                                  <div id="map" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>		
                </div>
              </div>
            )
      }
}

export default SingleListing;
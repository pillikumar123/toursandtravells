import React, { Component } from 'react'

class Offers extends Component {
    render() {
        return (
            <div>
            {/* Home */}
            <div className="home">
              <div className="home_background parallax-window" data-parallax="scroll" data-image-src="images/about_background.jpg" />
              <div className="home_content">
                <div className="home_title">our offers</div>
              </div>
            </div>
            {/* Offers */}
            <div className="offers">
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
              {/* Offers */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-1 temp_col" />
                  <div className="col-lg-11">
                    {/* Offers Sorting */}
                    <div className="offers_sorting_container">
                      <ul className="offers_sorting">
                        <li>
                          <span className="sorting_text">price</span>
                          <i className="fa fa-chevron-down" />
                          <ul>
                            <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }" data-parent=".price_sorting"><span>show all</span></li>
                            <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }" data-parent=".price_sorting"><span>ascending</span></li>
                          </ul>
                        </li>
                        <li>
                          <span className="sorting_text">location</span>
                          <i className="fa fa-chevron-down" />
                          <ul>
                            <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }"><span>default</span></li>
                            <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;name&quot; }"><span>alphabetical</span></li>
                          </ul>
                        </li>
                        <li>
                          <span className="sorting_text">stars</span>
                          <i className="fa fa-chevron-down" />
                          <ul>
                            <li className="filter_btn" data-filter="*"><span>show all</span></li>
                            <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;stars&quot; }"><span>ascending</span></li>
                            <li className="filter_btn" data-filter=".rating_3"><span>3</span></li>
                            <li className="filter_btn" data-filter=".rating_4"><span>4</span></li>
                            <li className="filter_btn" data-filter=".rating_5"><span>5</span></li>
                          </ul>
                        </li>
                        <li className="distance_item">
                          <span className="sorting_text">distance from center</span>
                          <i className="fa fa-chevron-down" />
                          <ul>
                            <li className="num_sorting_btn"><span>distance</span></li>
                            <li className="num_sorting_btn"><span>distance</span></li>
                            <li className="num_sorting_btn"><span>distance</span></li>
                          </ul>
                        </li>
                        <li>
                          <span className="sorting_text">reviews</span>
                          <i className="fa fa-chevron-down" />
                          <ul>
                            <li className="num_sorting_btn"><span>review</span></li>
                            <li className="num_sorting_btn"><span>review</span></li>
                            <li className="num_sorting_btn"><span>review</span></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {/* Offers Grid */}
                    <div className="offers_grid">
                      {/* Offers Item */}
                      <div className="offers_item rating_4">
                        <div className="row">
                          <div className="col-lg-1 temp_col" />
                          <div className="col-lg-3 col-1680-4">
                            <div className="offers_image_container">
                              {/* Image by https://unsplash.com/@kensuarez */}
                              <div className="offers_image_background" style={{backgroundImage: 'url(images/offer_1.jpg)'}} />
                              <div className="offer_name"><a href="single_listing.html">grand castle</a></div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="offers_content">
                              <div className="offers_price">$70<span>per night</span></div>
                              <div className="rating_r rating_r_4 offers_rating" data-rating={4}>
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                              </div>
                              <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                              <div className="offers_icons">
                                <ul className="offers_icons_list">
                                  <li className="offers_icons_item"><img src="images/post.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/compass.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/bicycle.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/sailboat.png" alt /></li>
                                </ul>
                              </div>
                              <div className="button book_button"><a href="#">book<span /><span /><span /></a></div>
                              <div className="offer_reviews">
                                <div className="offer_reviews_content">
                                  <div className="offer_reviews_title">very good</div>
                                  <div className="offer_reviews_subtitle">100 reviews</div>
                                </div>
                                <div className="offer_reviews_rating text-center">8.1</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Offers Item */}
                      <div className="offers_item rating_3">
                        <div className="row">
                          <div className="col-lg-1 temp_col" />
                          <div className="col-lg-3 col-1680-4">
                            <div className="offers_image_container">
                              {/* Image by https://unsplash.com/@thoughtcatalog */}
                              <div className="offers_image_background" style={{backgroundImage: 'url(images/offer_5.jpg)'}} />
                              <div className="offer_name"><a href="single_listing.html">eurostar hotel</a></div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="offers_content">
                              <div className="offers_price">$50<span>per night</span></div>
                              <div className="rating_r rating_r_3 offers_rating" data-rating={3}>
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                              </div>
                              <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                              <div className="offers_icons">
                                <ul className="offers_icons_list">
                                  <li className="offers_icons_item"><img src="images/post.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/compass.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/bicycle.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/sailboat.png" alt /></li>
                                </ul>
                              </div>
                              <div className="button book_button"><a href="#">book<span /><span /><span /></a></div>
                              <div className="offer_reviews">
                                <div className="offer_reviews_content">
                                  <div className="offer_reviews_title">very good</div>
                                  <div className="offer_reviews_subtitle">100 reviews</div>
                                </div>
                                <div className="offer_reviews_rating text-center">8.1</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Offers Item */}
                      <div className="offers_item rating_5">
                        <div className="row">
                          <div className="col-lg-1 temp_col" />
                          <div className="col-lg-3 col-1680-4">
                            <div className="offers_image_container">
                              {/* Image by https://unsplash.com/@mindaugas */}
                              <div className="offers_image_background" style={{backgroundImage: 'url(images/offer_6.jpg)'}} />
                              <div className="offer_name"><a href="single_listing.html">grand castle</a></div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="offers_content">
                              <div className="offers_price">$110<span>per night</span></div>
                              <div className="rating_r rating_r_5 offers_rating" data-rating={5}>
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                              </div>
                              <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                              <div className="offers_icons">
                                <ul className="offers_icons_list">
                                  <li className="offers_icons_item"><img src="images/post.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/compass.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/bicycle.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/sailboat.png" alt /></li>
                                </ul>
                              </div>
                              <div className="button book_button"><a href="#">book<span /><span /><span /></a></div>
                              <div className="offer_reviews">
                                <div className="offer_reviews_content">
                                  <div className="offer_reviews_title">very good</div>
                                  <div className="offer_reviews_subtitle">100 reviews</div>
                                </div>
                                <div className="offer_reviews_rating text-center">8.1</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Offers Item */}
                      <div className="offers_item rating_4">
                        <div className="row">
                          <div className="col-lg-1 temp_col" />
                          <div className="col-lg-3 col-1680-4">
                            <div className="offers_image_container">
                              {/* Image by https://unsplash.com/@rktkn */}
                              <div className="offers_image_background" style={{backgroundImage: 'url(images/offer_7.jpg)'}} />
                              <div className="offer_name"><a href="single_listing.html">eurostar hotel</a></div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="offers_content">
                              <div className="offers_price">$50<span>per night</span></div>
                              <div className="rating_r rating_r_4 offers_rating" data-rating={4}>
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                              </div>
                              <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                              <div className="offers_icons">
                                <ul className="offers_icons_list">
                                  <li className="offers_icons_item"><img src="images/post.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/compass.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/bicycle.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/sailboat.png" alt /></li>
                                </ul>
                              </div>
                              <div className="button book_button"><a href="#">book<span /><span /><span /></a></div>
                              <div className="offer_reviews">
                                <div className="offer_reviews_content">
                                  <div className="offer_reviews_title">very good</div>
                                  <div className="offer_reviews_subtitle">100 reviews</div>
                                </div>
                                <div className="offer_reviews_rating text-center">8.1</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Offers Item */}
                      <div className="offers_item rating_3">
                        <div className="row">
                          <div className="col-lg-1 temp_col" />
                          <div className="col-lg-3 col-1680-4">
                            <div className="offers_image_container">
                              {/* Image by https://unsplash.com/@itsnwa */}
                              <div className="offers_image_background" style={{backgroundImage: 'url(images/offer_8.jpg)'}} />
                              <div className="offer_name"><a href="single_listing.html">grand castle</a></div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="offers_content">
                              <div className="offers_price">$90<span>per night</span></div>
                              <div className="rating_r rating_r_3 offers_rating" data-rating={3}>
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                              </div>
                              <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                              <div className="offers_icons">
                                <ul className="offers_icons_list">
                                  <li className="offers_icons_item"><img src="images/post.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/compass.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/bicycle.png" alt /></li>
                                  <li className="offers_icons_item"><img src="images/sailboat.png" alt /></li>
                                </ul>
                              </div>
                              <div className="button book_button"><a href="#">book<span /><span /><span /></a></div>
                              <div className="offer_reviews">
                                <div className="offer_reviews_content">
                                  <div className="offer_reviews_title">very good</div>
                                  <div className="offer_reviews_subtitle">100 reviews</div>
                                </div>
                                <div className="offer_reviews_rating text-center">8.1</div>
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
          </div>
     
        )
    }
}

export default Offers;
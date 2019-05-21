import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div className="search">
                {/* Search Contents */}
                <div className="container fill_height">
                    <div className="row fill_height">
                        <div className="col fill_height">
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
        )
    }
}

export default Search;
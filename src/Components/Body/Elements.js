import React, { Component } from 'react'

class Elements extends Component {
    render() {
        return (
            <div>
                <div className="home1">
                    <div className="home_background parallax-window" data-parallax="scroll" data-image-src="images/elements_background.jpg" />
                    <div className="home_content">
                        <div className="home_title">elements</div>
                    </div>
                </div>
                {/* Elements */}
                <div className="elements">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {/* Buttons */}
                                <div className="buttons">
                                    <div className="row">
                                        <div className="col">
                                            <div className="elements_title">Buttons</div>
                                            <div className="buttons_container">
                                                <div className="button"><div className="button_bcg" /><a href="#">see more<span /><span /><span /></a></div>
                                                <div className="button button_color_1 trans_200"><a href="#">see more<span /><span /><span /></a></div>
                                                <div className="button button_color_2 trans_200"><a href="#">see more<span /><span /><span /></a></div>
                                                <div className="button button_line_1 trans_200"><a href="#" className="trans_200">see more<span /><span /><span /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Progress Bars and Accordions */}
                                <div className="pbars_accordions">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="elements_title">Progress Bars &amp; Accordions</div>
                                        </div>
                                    </div>
                                    <div className="row pbars_accordions_container">
                                        {/* Progress Bars & Accordions */}
                                        <div className="col-lg-7">
                                            {/* Progress Bars */}
                                            <div className="elements_progress_bars">
                                                <div className="pbar_container">
                                                    <ul className="progress_bar_container col_12 clearfix">
                                                        <li className="pb_item clearfix">
                                                            <div className="pb_item_title">
                                                                <h4>Trips</h4>
                                                            </div>
                                                            <div className="pb_item_content">
                                                                <div id="skill_1_pbar" className="skill_bars" data-perc="0.72" data-color="#31124b" />
                                                            </div>
                                                        </li>
                                                        <li className="pb_item clearfix">
                                                            <div className="pb_item_title">
                                                                <h4>Travels</h4>
                                                            </div>
                                                            <div className="pb_item_content">
                                                                <div id="skill_2_pbar" className="skill_bars" data-perc="0.89" data-color="#a95ce4" />
                                                            </div>
                                                        </li>
                                                        <li className="pb_item clearfix">
                                                            <div className="pb_item_title">
                                                                <h4>Hotels</h4>
                                                            </div>
                                                            <div className="pb_item_content">
                                                                <div id="skill_3_pbar" className="skill_bars" data-perc="0.32" data-color="#fa6f1b" />
                                                            </div>
                                                        </li>
                                                        <li className="pb_item clearfix">
                                                            <div className="pb_item_title">
                                                                <h4>Cruises</h4>
                                                            </div>
                                                            <div className="pb_item_content">
                                                                <div id="skill_4_pbar" className="skill_bars" data-perc="0.92" data-color="#fa9e1b" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            {/* Accordions */}
                                            <div className="elements_accordions">
                                                <div className="accordion_container">
                                                    <div className="accordion d-flex flex-row align-items-center active"><div>Aenean nec ipsum aliquet, pharetra magna id, interdum</div></div>
                                                    <div className="accordion_panel">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus.</p>
                                                    </div>
                                                </div>
                                                <div className="accordion_container">
                                                    <div className="accordion d-flex flex-row align-items-center"><div>Aenean nec ipsum aliquet, pharetra magna id, interdum</div></div>
                                                    <div className="accordion_panel">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus.</p>
                                                    </div>
                                                </div>
                                                <div className="accordion_container">
                                                    <div className="accordion d-flex flex-row align-items-center"><div>Aenean nec ipsum aliquet, pharetra magna id, interdum</div></div>
                                                    <div className="accordion_panel">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Milestones */}
                                <div className="milestones">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="elements_title">Milestones</div>
                                        </div>
                                    </div>
                                    <div className="row milestones_container">
                                        {/* Milestone */}
                                        <div className="col-lg-3 milestone_col">
                                            <div className="milestone text-center">
                                                <div className="milestone_icon"><img src="images/milestone_1.png" alt /></div>
                                                <div className="milestone_counter" data-end-value={255}>0</div>
                                                <div className="milestone_text">Clients</div>
                                            </div>
                                        </div>
                                        {/* Milestone */}
                                        <div className="col-lg-3 milestone_col">
                                            <div className="milestone text-center">
                                                <div className="milestone_icon"><img src="images/milestone_2.png" alt /></div>
                                                <div className="milestone_counter" data-end-value={1176}>0</div>
                                                <div className="milestone_text">Projects</div>
                                            </div>
                                        </div>
                                        {/* Milestone */}
                                        <div className="col-lg-3 milestone_col">
                                            <div className="milestone text-center">
                                                <div className="milestone_icon"><img src="images/milestone_3.png" alt /></div>
                                                <div className="milestone_counter" data-end-value={39}>0</div>
                                                <div className="milestone_text">Countries</div>
                                            </div>
                                        </div>
                                        {/* Milestone */}
                                        <div className="col-lg-3 milestone_col">
                                            <div className="milestone text-center">
                                                <div className="milestone_icon"><img src="images/milestone_4.png" alt /></div>
                                                <div className="milestone_counter" data-end-value={127}>0</div>
                                                <div className="milestone_text">Coffees</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Loaders */}
                                <div className="elements_section loaders">
                                    <div className="elements_title">Loaders</div>
                                    <div className="row elements_loaders_container">
                                        <div className="col-lg-3 loader_col">
                                            {/* Loader */}
                                            <div className="circle loader" data-value="0.75">
                                                <strong><i /></strong>
                                                <span>Hard work</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 loader_col">
                                            {/* Loader */}
                                            <div className="circle loader" data-value="0.83">
                                                <strong><i /></strong>
                                                <span>Creativity</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 loader_col">
                                            <div className="circle loader" data-value="0.25">
                                                <strong><i /></strong>
                                                <span>Good luck</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 loader_col">
                                            <div className="circle loader" data-value="0.95">
                                                <strong><i /></strong>
                                                <span>Developement</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Icon Boxes */}
                                <div className="icon_boxes">
                                    <div className="row">
                                        <div className="col">
                                            <div className="elements_title">Icon Boxes</div>
                                        </div>
                                    </div>
                                    <div className="row icon_boxes_container">
                                        <div className="col-lg-4 icon_box text-left d-flex flex-column align-items-start justify-content-start">
                                            <div className="icon_container d-flex flex-column justify-content-end">
                                                <div><img src="images/icon_1.png" alt /></div>
                                            </div>
                                            <h3>Cruises</h3>
                                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                                        </div>
                                        <div className="col-lg-4 icon_box text-left d-flex flex-column align-items-start justify-content-start">
                                            <div className="icon_container d-flex flex-column justify-content-end">
                                                <div><img src="images/icon_2.png" alt /></div>
                                            </div>
                                            <h3>Flights</h3>
                                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                                        </div>
                                        <div className="col-lg-4 icon_box text-left d-flex flex-column align-items-start justify-content-start">
                                            <div className="icon_container d-flex flex-column justify-content-end">
                                                <div><img src="images/icon_3.png" alt /></div>
                                            </div>
                                            <h3>Activities</h3>
                                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
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

export default Elements;
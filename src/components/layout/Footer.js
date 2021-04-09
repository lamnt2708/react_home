import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer widget-footer clearfix">
            {this.props.children}
                <div className="first-footer ttm-bgcolor-skincolor ttm-bg ttm-bgimage-yes bg-img1">
                <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
                <div className="container-xl">
                    <div className="row align-items-md-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 order-md-2">
                        <div className="footer-logo text-sm-center">
                        <img data-src="images/footer-logo.png" className="img-fluid" alt="footer-logo" src="images/footer-logo.png" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 order-md-1 res-767-mt-20">
                        <div className="text-left">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-white ttm-icon_element-size-md">
                                <i className="ti ti-location-pin" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */} 
                            <div className="featured-desc">
                                <p>24 Nguyen Co Thach</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 order-md-3 res-767-mt-20">
                        <div className="text-sm-right">
                        <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white"><i className="far fa-envelope" /> Info@example.com</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="second-footer ttm-textcolor-white bg-img2">
                <div className="container-xl">
                    <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                        <div className="widget widget_text  clearfix">
                        <h3 className="widget-title">About Our Company</h3>
                        <div className="textwidget widget-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lorem purus. Duis eros odio, aliquet eu turpis sed, vehicula pulvinar lacus.
                        </div>
                        <div className="quicklink-box">
                            {/*  featured-icon-box */} 
                            <div className="featured-icon-box left-icon">
                            <div className="featured-icon">{/*  featured-icon */} 
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                <span className="flaticon flaticon-clock" />{/*  ttm-icon */} 
                                </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                                <div className="featured-desc">{/*  featured-desc */}
                                <p>Talk To Our Support</p>
                                </div>
                                <div className="featured-title">{/*  featured-title */}
                                <h5>+1 002-123-4567</h5>
                                </div>
                            </div>
                            </div>{/*  featured-icon-box END */}
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                        <div className="widget link-widget clearfix">
                        <h3 className="widget-title">About Us</h3>
                        <ul id="menu-footer-services">
                        <li><Link to={'/company_info'}>Company's Info</Link></li>
                            <li><Link to={'/greetings'}>CEO Greetings</Link></li>
                            <li><Link to={'/visions'}>Visions</Link></li>
                            <li><Link to={'/team_detail'}>Our Team</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                        <div className="widget link-widget clearfix">
                        <h3 className="widget-title">Services</h3>
                        <ul id="menu-footer-services">
                            <li><Link to={'/lab_develop'}>Lab Type Offshore Development</Link></li>
                            <li><Link to={'/app_develop'}>Appication Development</Link></li>
                            <li><Link to={'/web_develop'}>Website Development</Link></li>

                        </ul>

                        <h3 className="widget-title mt-4">Projects</h3>
                        <ul id="menu-footer-services">
                            <li><Link to={'/projects_web'}>Website</Link></li>
                            <li><Link to={'/projects_app'}>Application</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area res-767-mb-40">
                        <div className="widget flicker_widget clearfix">

                        <div className="textwidget widget-text">
                            <h5>Follow Us On</h5>
                            <div className="social-icons circle social-hover">
                            <ul className="list-inline">
                                <li className="social-facebook"><a className="tooltip-top rounded-circle" target="_blank" data-tooltip="Facebook"><i className="fab fa-facebook-f" /></a></li>
                                <li className="social-twitter"><a className="tooltip-top rounded-circle" target="_blank" data-tooltip="Twitter"><i className="fab fa-twitter" /></a></li>
                                <li className="social-flickr"><a className=" tooltip-top rounded-circle" target="_blank" data-tooltip="flickr"><i className="fab fa-flickr" /></a></li>
                                <li className="social-linkedin"><a className=" tooltip-top rounded-circle" target="_blank" data-tooltip="aedIn"><i className="fab fa-linkedin-in" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="bottom-footer-text ttm-bgcolor-darkgrey ttm-textcolor-white">
                <div className="container-xl">
                    <div className="row copyright align-items-center res-767-text-center">
                    <div className="col-md-6">
                        <div>
                        <span>Copyright © 2021&nbsp;<a to="/">React+</a></span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-right res-767-mt-10">
                        <div className="d-lg-inline-flex">
                            <div className="float-md-right ml-20 res-767-ml-0">
                            <img data-src="images/footer-payment-img.png" alt="payment-img" src="images/footer-payment-img.png" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
        )
    }
}
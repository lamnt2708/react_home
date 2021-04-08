import React, { Component } from 'react';
import Header from '../layout/Header';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class Contact_02 extends Component {
    render() {

        return (
            <div className="site-main">
                <Header />
                {/* page-title */}
                <div className="ttm-page-title-row">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-box text-center">
                                    <div className="page-title-heading">
                                        <h1 className="title">Contact Us</h1>
                                    </div>{/* /.page-title-captions */}
                                    <div className="breadcrumb-wrapper">
                                        <span>
                                            <a title="Homepage" href={process.env.PUBLIC_URL + '/#Single_blog'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                                        </span>
                                        <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                                        <span>Contact Us</span>
                                    </div>
                                </div>
                            </div>{/* /.col-md-12 */}
                        </div>{/* /.row */}
                    </div>{/* /.container */}
                </div>
                {/* page-title end*/}
                <section className="ttm-row contact-section clearfix">
                    <div className="container-xl">
                        <div className="row">{/* row */}
                            <div className="col-lg-8 offset-lg-2">
                                {/* section-title */}
                                <div className="section-title with-desc text-center clearfix">
                                    <div className="title-header">
                                        <h2 className="title">Contact Us</h2>
                                        <h5>Thank you for your interest in ReactPlus and our services.<br /> If you have any question for us! Please fill our form below and we will get back to you as soon as posible.</h5>
                                    </div>
                                </div>{/* section-title end */}
                            </div>
                        </div>
                        {/* row end */}
                        {/* row */}
                        <form id="ttm-quote-form" className="row ttm-quote-form clearfix" method="post" action="#">
                            <div className="col-sm-12 col-md-12" style={{"padding": "1rem"}}>
                                <div className="form-group">
                                    <label for="name">Full Name</label>
                                    <input name="name" type="text" className="form-control bg-white border" placeholder="Full Name*" required="required" />
                                </div>
                                <div className="form-group">
                                    <label for="company">Company</label>
                                    <input name="company" type="text" className="form-control bg-white border" placeholder="Company Name*" required="required" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12" style={{"padding": "1rem"}}>
                                <div className="form-group">
                                    <label for="phone">Phone</label>
                                    <input name="phone" type="text" placeholder="Phone Number*" required="required" className="form-control bg-white border" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12" style={{"padding": "1rem"}}>
                                <div className="form-group">
                                    <label for="address">Email Address</label>
                                    <input name="address" type="text" placeholder="Email Address*" required="required" className="form-control bg-white border" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12" style={{"padding": "1rem"}}>
                                <div className="form-group">
                                    <label for="message">Message</label>
                                    <textarea name="Message" rows={5} placeholder="Write A Message..." required="required" className="form-control bg-white border" defaultValue={""} />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="text-center">
                                    <button type="submit" id="submit" className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor mt-5 res-991-mt-20" value>
                                        Submit Massage
                            </button>
                                </div>
                            </div>
                        </form>
                        {/* row end*/}
                    </div>
                </section>




                {/* contact-box-section */}
                <div className="ttm-row contact-box-section ttm-bgcolor-grey clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-4 res-991-mb-60 res-991-mt-30">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box style8 text-center box-shadow">
                                    <div className="featured-icon">{/* featured-icon*/}
                                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle">
                                            <i className="far fa-envelope" />
                                        </div>
                                    </div>{/* featured-icon */}
                                    <div className="featured-content">{/* featured-content */}
                                        <div className="featured-title">
                                            <h5>Email</h5>{/* featured-title */}
                                        </div>
                                        <div className="featured-desc">{/* featured-description */}
                                            <p>
                                                <a href="mailto:info@example.com">info@example.com</a><br />
                                                <a href="mailto:emailexample@demo.com">emailexample@demo.com</a>
                                            </p>
                                        </div>
                                    </div>{/* featured-content END*/}
                                </div>{/* featured-icon-box */}
                            </div>
                            <div className="col-lg-4 res-991-mb-60">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box style8 text-center box-shadow">
                                    <div className="featured-icon">{/* featured-icon*/}
                                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle">
                                            <i className="fa fa-phone" />
                                        </div>
                                    </div>{/* featured-icon */}
                                    <div className="featured-content">{/* featured-content */}
                                        <div className="featured-title">
                                            <h5>Phone</h5>{/* featured-title */}
                                        </div>
                                        <div className="featured-desc">{/* featured-description */}
                                            <p>
                                                +01-4488-64585458<br />
                                11415(12456)2424
                                </p>
                                        </div>
                                    </div>{/* featured-content END*/}
                                </div>{/* featured-icon-box */}
                            </div>
                            <div className="col-lg-4">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box style8 text-center box-shadow">
                                    <div className="featured-icon">{/* featured-icon*/}
                                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle">
                                            <i className="ti ti-target" />
                                        </div>
                                    </div>{/* featured-icon */}
                                    <div className="featured-content">{/* featured-content */}
                                        <div className="featured-title">
                                            <h5>Address</h5>{/* featured-title */}
                                        </div>
                                        <div className="featured-desc">{/* featured-description */}
                                            <p>
                                                229 Young Street Irwin, PA 15642<br />
                                New York
                                </p>
                                        </div>
                                    </div>{/* featured-content END*/}
                                </div>{/* featured-icon-box */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact-box-section end */}
                {/* map-section */}

                {/* map-section end */}
            </div>
        )
    }
}


export default Contact_02;

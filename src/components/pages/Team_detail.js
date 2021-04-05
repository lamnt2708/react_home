import React, { Component } from 'react';
import Header from '../layout/Header';
import { MDBProgress } from 'mdbreact';

export class Team_detail extends Component {
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
                            <h1 className="title">Team Details</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href="/"><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Our Expert</span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Team Details</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                <section className="ttm-row team-details-section clearfix">
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-4">
                        <div className="ttm-featured-wrapper"> 
                            <div className="featured-thumbnail text-center">
                            <img className="img-fluid" src="images/temp/team-img04.jpg" alt="image" />
                            </div> 
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="ttm-team-member-content shadow-box res-991-mt-30">
                            <div className="ttm-team-member-single-list">
                            <h2 className="ttm-team-member-single-title">Nguyen Tien Loc</h2>
                            <span className="ttm-team-member-single-position">Technical Leader</span>
                            <p>Meet Nguyen Tien Loc. He has over 10 years of experience as an developer, 8 of which as a full-stack developer. For the last 5 years, he had been working with React and React Native. This has enabled him to have deep understanding of the language and know how to use it best in development. </p>
                            <p>As an technical leader, he has experience in all process of developing an application, from requirements analysis, DB, UI/UX designs, coding to even project management. During the course of his carrer, he has worked with customer from all over the worlds including those from America, China, Korean, Indonesia and Japan.</p>
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-4 mb-4" />
                            </div>
                            {/* separator */}
                            <div className="ttm-team-data">
                                <div className="ttm-team-details-wrapper">
                                <ul className="ttm-team-details-list clearfix">
                                    {/* <li>
                                    <div className="ttm-team-list-title"><i className="fa fa-phone" /> Phone :</div>
                                    <div className="ttm-team-list-value"><a href="tel:+1800200145">+1800200145</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-email" /> Email :</div>
                                    <div className="ttm-team-list-value"><a href="mailto:info@example.com">info@example.com</a></div>
                                    </li> */}
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-world" /> Website :</div>
                                    <div className="ttm-team-list-value"><a target="_blank" href="https://react-plus.com/">https://react-plus.com/</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-time" /> Experience :</div>
                                    <div className="ttm-team-list-value">10 Years</div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-calendar" /> Since :</div>
                                    <div className="ttm-team-list-value">2011</div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-location-pin" /> Address Info :</div>
                                    <div className="ttm-team-list-value">Ha Noi, Viet Nam</div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-3 mb-4" />
                            </div>
                            {/* separator */}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row">{/* row */}
                        <div className="col-md-6">
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">UI/UX Design</div>{/* progress-bar-title */}
                                <label className="float-right">77%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={77}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">App Development</div>{/* progress-bar-title */}
                                <label className="float-right">85%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={85}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                        </div>
                        <div className="col-md-6 res-767-mt-30">
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">Database Design</div>{/* progress-bar-title */}
                                <label className="float-right">77%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={77}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">Project Management</div>{/* progress-bar-title */}
                                <label className="float-right">80%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={80}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                        </div>
                    </div>
                    {/* row end */}
                    {/* <div className="row mt-5">
                        <div className="col-12">
                        <h4>Career Guidelines</h4>
                        <p className="mb-5">Prior to joining Integrio, he spent 20+ years at Inmosys, where he held a wide range of global leadership roles, from services to products, and across operations and sales. Most recently, he was SVP &amp; Global Head of the Manufacturing business, as well as a board member of their software subsidiary. He is also an avid cook and history buff. You can find him dining late at night with the chefs of the hotels where he stays during his travels, or reading in his home library.</p>
                        </div>
                    </div> */}
                    {/* <div className="row">
                        <div className="col-12">
                        <h4>Contact Me</h4>
                        </div>
                        <div className="col-12">
                        <div className="row">
                            <div className="col-lg-4">
                            <div className="member-info-box border mb-30">
                                <div className="timing-box">
                                <i className="ti ti-time" />
                                <h5>Working Time</h5>
                                </div>
                                <ul className="timing-list">
                                <li>
                                    <span className="day">Monday - Friday :</span>
                                    <span className="time">8.00 - 10.00</span>
                                </li>
                                <li>
                                    <span className="day">Saturday :</span>
                                    <span className="time">8.00 - 10.00</span>
                                </li>
                                <li>
                                    <span className="day">Sunday :</span>
                                    <span className="time">8.00 - 10.00</span>
                                </li>
                                </ul>
                            </div>
                            <div className="member-info-box border">
                                <div className="timing-box">
                                <i className="flaticon flaticon-developer" />
                                <h5>General Information</h5>
                                </div>
                                <ul className="info-list">
                                <li>
                                    <i className="ti ti-location-pin" />
                                    <span>Los Angeles, USA, Los Angeles, USA</span>
                                </li>
                                <li>
                                    <i className="ti ti-mobile" />
                                    <span>(+01) 123 456 7890</span>
                                </li>
                                <li>
                                    <i className="ti ti-comment" />
                                    <span>info@example.com</span>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-lg-8">
                            <div className="member-contact-form border res-991-mt-30">
                                <form id="ttm-quote-form" className="row ttm-quote-form clearfix" method="post" action="#">
                                <div className="col-sm-6 col-md-6">
                                    <div className="form-group">
                                    <input name="name" type="text" className="form-control ttm-bgcolor-grey" placeholder="Full Name*" required="required" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <div className="form-group">
                                    <input name="phone" type="text" placeholder="Phone Number*" required="required" className="form-control  ttm-bgcolor-grey" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <div className="form-group">
                                    <input name="address" type="text" placeholder="Email Address*" required="required" className="form-control  ttm-bgcolor-grey" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <div className="form-group">
                                    <input name="subject" type="text" placeholder="Subject" required="required" className="form-control  ttm-bgcolor-grey" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12">
                                    <div className="form-group">
                                    <textarea name="Massage" rows={6} placeholder="Write A Massage..." required="required" className="form-control  ttm-bgcolor-grey" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="text-left">
                                    <button type="submit" id="submit" className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor" value>
                                        Book An Appointment
                                    </button>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    </div>
                </section>
                <section className="ttm-row team-details-section clearfix">
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-4">
                        <div className="ttm-featured-wrapper"> 
                            <div className="featured-thumbnail text-center">
                            <img className="img-fluid" src="images/temp/team-img04.jpg" alt="image" />
                            </div> 
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="ttm-team-member-content shadow-box res-991-mt-30">
                            <div className="ttm-team-member-single-list">
                            <h2 className="ttm-team-member-single-title">Dao Viet Anh</h2>
                            <span className="ttm-team-member-single-position">Technical Leader</span>
                            <p>This is our technical leader Dao Viet Anh. He is one the two most senior developer of React Plus in term of work experience. Starting with Java, he has master many programing languages and frameworks for developing both front-end and back-end contents like Scala, Struts, AngularJs, NextJs, React, ReactNative, Redux...  </p>
                            <p>While specializing in back-end works like DB design and creating API, he also excell in front-end works and have years of experience in project management. He also have experience working with custommer from all over the globe. </p>
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-4 mb-4" />
                            </div>
                            {/* separator */}
                            <div className="ttm-team-data">
                                <div className="ttm-team-details-wrapper">
                                <ul className="ttm-team-details-list clearfix">
                                    {/* <li>
                                    <div className="ttm-team-list-title"><i className="fa fa-phone" /> Phone :</div>
                                    <div className="ttm-team-list-value"><a href="tel:+1800200145">+1800200145</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-email" /> Email :</div>
                                    <div className="ttm-team-list-value"><a href="mailto:info@example.com">info@example.com</a></div>
                                    </li> */}
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-world" /> Website :</div>
                                    <div className="ttm-team-list-value"><a target="_blank" href="https://react-plus.com/">https://react-plus.com/</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-time" /> Experience :</div>
                                    <div className="ttm-team-list-value">10 Years</div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-calendar" /> Since :</div>
                                    <div className="ttm-team-list-value">2011</div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-location-pin" /> Address Info :</div>
                                    <div className="ttm-team-list-value">Ha Noi, Viet Nam</div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-3 mb-4" />
                            </div>
                            {/* separator */}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row">{/* row */}
                        <div className="col-md-6">
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">UI/UX Design</div>{/* progress-bar-title */}
                                <label className="float-right">77%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={77}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">App Development</div>{/* progress-bar-title */}
                                <label className="float-right">85%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={85}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                        </div>
                        <div className="col-md-6 res-767-mt-30">
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">Database Design</div>{/* progress-bar-title */}
                                <label className="float-right">77%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={77}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">Project Management</div>{/* progress-bar-title */}
                                <label className="float-right">80%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={80}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                        </div>
                    </div>
                    </div>
                    </section>
                    <section className="ttm-row team-details-section clearfix">
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-4">
                        <div className="ttm-featured-wrapper"> 
                            <div className="featured-thumbnail text-center">
                            <img className="img-fluid" src="images/temp/team-img04.jpg" alt="image" />
                            </div> 
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="ttm-team-member-content shadow-box res-991-mt-30">
                            <div className="ttm-team-member-single-list">
                            <h2 className="ttm-team-member-single-title">Le Manh Hung</h2>
                            <span className="ttm-team-member-single-position">Technical Leader</span>
                            <p>Hung has been with React Plus from almost day one. He has provided technical advice and led the implementation of technology-based solutions for many of our projects. In the past, he also have been working as a developer in Japan for almost a year, enabling him to have an understanding of Japan's work culture.  </p>
                            <p>Starting from a simple developer, his role has evolved to include project management, requirements analysis, heating up things on our mobile/responsive front end development and creating simple, efficient solutions for our projects.</p>
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-4 mb-4" />
                            </div>
                            {/* separator */}
                            <div className="ttm-team-data">
                                <div className="ttm-team-details-wrapper">
                                <ul className="ttm-team-details-list clearfix">
                                    {/* <li>
                                    <div className="ttm-team-list-title"><i className="fa fa-phone" /> Phone :</div>
                                    <div className="ttm-team-list-value"><a href="tel:+1800200145">+1800200145</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-email" /> Email :</div>
                                    <div className="ttm-team-list-value"><a href="mailto:info@example.com">info@example.com</a></div>
                                    </li> */}
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-world" /> Website :</div>
                                    <div className="ttm-team-list-value"><a target="_blank" href="https://react-plus.com/">https://react-plus.com/</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-time" /> Experience :</div>
                                    <div className="ttm-team-list-value">10 Years</div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-calendar" /> Since :</div>
                                    <div className="ttm-team-list-value">2011</div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-location-pin" /> Address Info :</div>
                                    <div className="ttm-team-list-value">Ha Noi, Viet Nam</div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-3 mb-4" />
                            </div>
                            {/* separator */}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row">{/* row */}
                        <div className="col-md-6">
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">UI/UX Design</div>{/* progress-bar-title */}
                                <label className="float-right">77%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={77}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">App Development</div>{/* progress-bar-title */}
                                <label className="float-right">85%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={85}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                        </div>
                        <div className="col-md-6 res-767-mt-30">
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">Database Design</div>{/* progress-bar-title */}
                                <label className="float-right">77%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={77}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">Project Management</div>{/* progress-bar-title */}
                                <label className="float-right">80%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={80}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                        </div>
                    </div>
                    </div>
                    </section>
                    <section className="ttm-row team-details-section clearfix">
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-4">
                        <div className="ttm-featured-wrapper"> 
                            <div className="featured-thumbnail text-center">
                            <img className="img-fluid" src="images/temp/team-img04.jpg" alt="image" />
                            </div> 
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="ttm-team-member-content shadow-box res-991-mt-30">
                            <div className="ttm-team-member-single-list">
                            <h2 className="ttm-team-member-single-title">Mai Thi Hong Tham</h2>
                            <span className="ttm-team-member-single-position">BrSE Leader</span>
                            <p>Meet our BrSE team leader Mai Thi Hong Tham. With 8+ years of experience working as a BrSE under her belt, she is able to understand precisely what the client want and convey them to our developer team. When working with us, she will be the first and the last person you talk with to get your desired development result.</p>
                            <p>Other than the day-to-day communication and report, to ensure the progress of development, she is also in charge of other processes like requirements analysis, project management, creating development document and testing. </p>
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-4 mb-4" />
                            </div>
                            {/* separator */}
                            <div className="ttm-team-data">
                                <div className="ttm-team-details-wrapper">
                                <ul className="ttm-team-details-list clearfix">
                                    {/* <li>
                                    <div className="ttm-team-list-title"><i className="fa fa-phone" /> Phone :</div>
                                    <div className="ttm-team-list-value"><a href="tel:+1800200145">+1800200145</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-email" /> Email :</div>
                                    <div className="ttm-team-list-value"><a href="mailto:info@example.com">info@example.com</a></div>
                                    </li> */}
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-world" /> Website :</div>
                                    <div className="ttm-team-list-value"><a target="_blank" href="https://react-plus.com/">https://react-plus.com/</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-time" /> Experience :</div>
                                    <div className="ttm-team-list-value">8 Years</div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-calendar" /> Since :</div>
                                    <div className="ttm-team-list-value">2014</div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-location-pin" /> Address Info :</div>
                                    <div className="ttm-team-list-value">Ha Noi, Viet Nam</div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-3 mb-4" />
                            </div>
                            {/* separator */}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row">{/* row */}
                        <div className="col-md-6">
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">UI/UX Design</div>{/* progress-bar-title */}
                                <label className="float-right">77%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={77}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">App Development</div>{/* progress-bar-title */}
                                <label className="float-right">85%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={85}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                        </div>
                        <div className="col-md-6 res-767-mt-30">
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">Database Design</div>{/* progress-bar-title */}
                                <label className="float-right">77%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={77}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">Project Management</div>{/* progress-bar-title */}
                                <label className="float-right">80%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={80}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                        </div>
                    </div>
                    </div>
                    </section>
                    <section className="ttm-row team-details-section clearfix">
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-4">
                        <div className="ttm-featured-wrapper"> 
                            <div className="featured-thumbnail text-center">
                            <img className="img-fluid" src="images/temp/team-img04.jpg" alt="image" />
                            </div> 
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="ttm-team-member-content shadow-box res-991-mt-30">
                            <div className="ttm-team-member-single-list">
                            <h2 className="ttm-team-member-single-title">Ngo Thai Son</h2>
                            <span className="ttm-team-member-single-position">Technical Leader</span>
                            <p>Meet Nguyen Tien Loc. He has over 10 years of experience as an developer, 8 of which as a full-stack developer. For the last 5 years, he had been working with React and React Native. This has enabled him to have deep understanding of the language and know how to use it best in development. </p>
                            <p>As an techinical leader, he has succesfully take part in all process of developing an application, from requirements analysis, DB, UI/UX designs, coding to even project management. During the course of his carrer, he has worked with customer from all over the worlds like America, China, Korean, Indonesia and Japan.</p>
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-4 mb-4" />
                            </div>
                            {/* separator */}
                            <div className="ttm-team-data">
                                <div className="ttm-team-details-wrapper">
                                <ul className="ttm-team-details-list clearfix">
                                    {/* <li>
                                    <div className="ttm-team-list-title"><i className="fa fa-phone" /> Phone :</div>
                                    <div className="ttm-team-list-value"><a href="tel:+1800200145">+1800200145</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-email" /> Email :</div>
                                    <div className="ttm-team-list-value"><a href="mailto:info@example.com">info@example.com</a></div>
                                    </li> */}
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-world" /> Website :</div>
                                    <div className="ttm-team-list-value"><a target="_blank" href="https://react-plus.com/">https://react-plus.com/</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-time" /> Experience :</div>
                                    <div className="ttm-team-list-value">10 Years</div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-calendar" /> Since :</div>
                                    <div className="ttm-team-list-value">2011</div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-location-pin" /> Address Info :</div>
                                    <div className="ttm-team-list-value">Ha Noi, Viet Nam</div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-3 mb-4" />
                            </div>
                            {/* separator */}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row">{/* row */}
                        <div className="col-md-6">
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">UI/UX Design</div>{/* progress-bar-title */}
                                <label className="float-right">77%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={77}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">App Development</div>{/* progress-bar-title */}
                                <label className="float-right">85%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={85}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                        </div>
                        <div className="col-md-6 res-767-mt-30">
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">Database Design</div>{/* progress-bar-title */}
                                <label className="float-right">77%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={77}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">Project Management</div>{/* progress-bar-title */}
                                <label className="float-right">80%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={80}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                        </div>
                    </div>
                    </div>
                    </section>
                    <section className="ttm-row team-details-section clearfix">
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-4">
                        <div className="ttm-featured-wrapper"> 
                            <div className="featured-thumbnail text-center">
                            <img className="img-fluid" src="images/temp/team-img04.jpg" alt="image" />
                            </div> 
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="ttm-team-member-content shadow-box res-991-mt-30">
                            <div className="ttm-team-member-single-list">
                            <h2 className="ttm-team-member-single-title">Do Manh Dat</h2>
                            <span className="ttm-team-member-single-position">Technical Leader</span>
                            <p>Meet Nguyen Tien Loc. He has over 10 years of experience as an developer, 8 of which as a full-stack developer. For the last 5 years, he had been working with React and React Native. This has enabled him to have deep understanding of the language and know how to use it best in development. </p>
                            <p>As an techinical leader, he has succesfully take part in all process of developing an application, from requirements analysis, DB, UI/UX designs, coding to even project management. During the course of his carrer, he has worked with customer from all over the worlds like America, China, Korean, Indonesia and Japan.</p>
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-4 mb-4" />
                            </div>
                            {/* separator */}
                            <div className="ttm-team-data">
                                <div className="ttm-team-details-wrapper">
                                <ul className="ttm-team-details-list clearfix">
                                    {/* <li>
                                    <div className="ttm-team-list-title"><i className="fa fa-phone" /> Phone :</div>
                                    <div className="ttm-team-list-value"><a href="tel:+1800200145">+1800200145</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-email" /> Email :</div>
                                    <div className="ttm-team-list-value"><a href="mailto:info@example.com">info@example.com</a></div>
                                    </li> */}
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-world" /> Website :</div>
                                    <div className="ttm-team-list-value"><a target="_blank" href="https://react-plus.com/">https://react-plus.com/</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-time" /> Experience :</div>
                                    <div className="ttm-team-list-value">10 Years</div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-calendar" /> Since :</div>
                                    <div className="ttm-team-list-value">2011</div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-location-pin" /> Address Info :</div>
                                    <div className="ttm-team-list-value">Ha Noi, Viet Nam</div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-3 mb-4" />
                            </div>
                            {/* separator */}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row">{/* row */}
                        <div className="col-md-6">
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">UI/UX Design</div>{/* progress-bar-title */}
                                <label className="float-right">77%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={77}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">App Development</div>{/* progress-bar-title */}
                                <label className="float-right">85%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={85}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                        </div>
                        <div className="col-md-6 res-767-mt-30">
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">Database Design</div>{/* progress-bar-title */}
                                <label className="float-right">77%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={77}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">Project Management</div>{/* progress-bar-title */}
                                <label className="float-right">80%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={80}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                        </div>
                    </div>
                    </div>
                    </section>
            </div>
            )
    }
}


export default Team_detail;
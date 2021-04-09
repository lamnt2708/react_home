import React, { Component } from 'react';
// import { MDBProgress } from 'mdbreact';
// import Slider from 'react-slick';
// import CountUp from 'react-countup';
import Header from '../layout/Header';

export class Projects_App extends Component {
    render() {
        var slick_slider = {
          dots: false,
          arrow: false,
          autoplay: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,

          responsive: [{

            breakpoint: 1199,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {
      
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {
      
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
        };
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
                            <h1 className="title">Our Work</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/'} ><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Projects : : Application </span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}

                
                <section className="ttm-row aboutus-section clearfix" id="project-1">

                    {/* aboutus-section */}

                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-project" src="./images/temp/pos.jfif" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>01</h5>
                                <h2 className="title">POS Application For Tablet</h2>
                            </div>
                            <div className="title-desc">
                                <p>This is a chain store management application compatible with a tablet. With this application user can perform actions like add, change, delete products, scan the barcode to get information about the products and create a receipt for the transaction.</p>
                            </div>
                            </div>{/* section title end */}

                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="container-xl mt-5">
                  <div className="col-md-12">

                    <div className="col-md-10 offset-md-1 px-md-0 ">
                 <table class="table text-center strong ml-1 mr-1 " >
                    <tbody>
                    <tr>
                        <td class="text-left font-weight-600" >Development Field</td>
                        <td class="text-left" >Sales</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Team Size</td>
                        <td class="text-left" >3 people</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Technologies</td>
                        <td class="text-left" >ReactNative-AWS</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left align-middle" >Lab-type Contract in more than 3 months (On-going)</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                    </div>
                    </div>
                    </section>

                 {/* aboutus-section end */}

                {/* Companysection end*/}
                <section className="ttm-row.zero-padding-section clearfix" id="project-2">
 
                                {/* aboutus-section */}

                    <div className="container-xl">
                    <div className="row">{/* row */}

                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>02</h5>
                                <h2 className="title">English Study App for Japanese</h2>
                            </div>
                            <div className="title-desc">
                                <p>An app created for user who have applied for an English learning course. It's has necessary features to improve user's English conversation skills like daily homework, chat with instructor, apply for classes...</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-project" src="./images/temp/english_learning.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="container-xl mt-5">
                  <div className="col-md-12">

                    <div className="col-md-10 offset-md-1 px-md-0 ">
                 <table class="table text-center strong ml-1 mr-1 " >
                    <tbody>
                    <tr>
                        <td class="text-left font-weight-600" >Development Field</td>
                        <td class="text-left" >Education</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Team Size</td>
                        <td class="text-left" >6 pepople</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Technologies</td>
                        <td class="text-left" >ReactNative-Redux-PHP-MySQL</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left align-middle" >Lab-type Contract in 6 months </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                    </div>
                    </div>
                    </section>
                    <section className="ttm-row clearfix" id="project-3">
                                {/* aboutus-section */}
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-project" src="./images/temp/busses_track.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>03</h5>
                                <h2 className="title">Bus Track Application</h2>
                            </div>
                            <div className="title-desc">
                                <p>It's an application to track buses live and provide estimated arrival times for each stop. We also implement the function to enter your destination to find the cheapest and fastest route.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="container-xl mt-5">
                  <div className="col-md-12">

                    <div className="col-md-10 offset-md-1 px-md-0 ">
                 <table class="table text-center strong ml-1 mr-1 " >
                    <tbody>
                    <tr>
                        <td class="text-left font-weight-600" >Development Field</td>
                        <td class="text-left" >Services</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Team Size</td>
                        <td class="text-left" >3 people</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Technologies</td>
                        <td class="text-left" >React-Redux-NodeJs</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left align-middle" >Project Based – 6 months</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                    </div>
                    </div>
                    </section>
                    <section className="ttm-row.zero-padding-section clearfix" id="project-4">
                    {/* aboutus-section */}
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>04</h5>
                                <h2 className="title">In-game Voice Chat Application</h2>
                            </div>
                            <div className="title-desc">
                                <p>An application that enabled you to voice chat while in-game on your mobile device. Users can start voice chat directly 1 on 1 with a friend or create a room for all of their friends and communicate to everyone there.
                                     </p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-project" src="./images/temp/game_voice.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="container-xl mt-5">
                  <div className="col-md-12">

                    <div className="col-md-10 offset-md-1 px-md-0 ">
                 <table class="table text-center strong ml-1 mr-1 " >
                    <tbody>
                    <tr>
                        <td class="text-left font-weight-600" >Development Field</td>
                        <td class="text-left" >Media</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Team Size</td>
                        <td class="text-left" >3 people</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Technologies</td>
                        <td class="text-left" >React-Redux-MySQL</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left align-middle" >Lab-type Contract in 1 year</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                    </div>
                    </div>
                    </section>
                    <section className="ttm-row clearfix" id="project-5">
                                {/* aboutus-section */}
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-project" src="./images/temp/matching_app.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>05</h5>
                                <h2 className="title">Matching App</h2>
                            </div>
                            <div className="title-desc">
                                <p>An application for people to find and introduce themselves to potential date in your local area. Users could set up their profile, check out others profile and start matching.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="container-xl mt-5">
                  <div className="col-md-12">

                    <div className="col-md-10 offset-md-1 px-md-0 ">
                 <table class="table text-center strong ml-1 mr-1 " >
                    <tbody>
                    <tr>
                        <td class="text-left font-weight-600" >Development Field</td>
                        <td class="text-left" >Services</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Team Size</td>
                        <td class="text-left" >4 people</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Technologies</td>
                        <td class="text-left" >ReactNative-Redux-AWS</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left align-middle" >Project Based – 6 months</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                    </div>
                    </div>
                    </section>
                    <section className="ttm-row.zero-padding-section mb-5 clearfix" id="project-6">
                      {/* aboutus-section */}
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>06</h5>
                                <h2 className="title">Medical Messaging App</h2>
                            </div>
                            <div className="title-desc">
                                <p>A HIPAA compliant messaging app for medical answering service. With this, user can manage patient and medical office communications from mobile devices.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-project" src="./images/temp/message.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="container-xl mt-5">
                  <div className="col-md-12">

                    <div className="col-md-10 offset-md-1 px-md-0 ">
                 <table class="table text-center strong ml-1 mr-1 " >
                    <tbody>
                    <tr>
                        <td class="text-left font-weight-600" >Development Field</td>
                        <td class="text-left" >Services</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Team Size</td>
                        <td class="text-left" >4 people</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Technologies</td>
                        <td class="text-left" >React-NodeJs-DynamoDB-AWS</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left align-middle" >Lab-type Contract in 8 months</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                    </div>
                    </div>
                    </section>
            </div>
            )
    }
}


export default Projects_App;
import React, { Component } from 'react';
// import { MDBProgress } from 'mdbreact';
// import Slider from 'react-slick';
// import CountUp from 'react-countup';
import Header from '../layout/Header';

export class Projects_Web extends Component {
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
                            <img className="img-fluid" src="../images/temp/13.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>01</h5>
                                <h2 className="title">Lorem Ipsum Website</h2>
                            </div>
                            <div className="title-desc">
                                <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s web applications.</p>
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
                        <td class="text-right font-weight-600" >Development Field</td>
                        <td class="text-left" >Sales</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Client Size</td>
                        <td class="text-left" >11-100 employees</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Technologies</td>
                        <td class="text-left" >Java/Objective-C/Struts</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left" >Lab-type Contract in more than 2 years (On-going)</td>
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
                                <h2 className="title">Lorem Ipsum Website</h2>
                            </div>
                            <div className="title-desc">
                                <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s web applications.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="../images/temp/14.jpg" title="single-img-nine" alt="single-img-nine" />
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
                        <td class="text-right font-weight-600" >Development Field</td>
                        <td class="text-left" >Sales</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Client Size</td>
                        <td class="text-left" >11-100 employees</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Technologies</td>
                        <td class="text-left" >Java/Objective-C/Struts</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left" >Lab-type Contract in more than 2 years (On-going)</td>
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
                            <img className="img-fluid" src="../images/temp/15.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>03</h5>
                                <h2 className="title">Lorem Ipsum Website</h2>
                            </div>
                            <div className="title-desc">
                                <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s web applications.</p>
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
                        <td class="text-right font-weight-600" >Development Field</td>
                        <td class="text-left" >Sales</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Client Size</td>
                        <td class="text-left" >11-100 employees</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Technologies</td>
                        <td class="text-left" >Java/Objective-C/Struts</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left" >Lab-type Contract in more than 2 years (On-going)</td>
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
                                <h2 className="title">Lorem Ipsum Website</h2>
                            </div>
                            <div className="title-desc">
                                <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s web applications.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="../images/temp/14.jpg" title="single-img-nine" alt="single-img-nine" />
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
                        <td class="text-right font-weight-600" >Development Field</td>
                        <td class="text-left" >Sales</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Client Size</td>
                        <td class="text-left" >11-100 employees</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Technologies</td>
                        <td class="text-left" >Java/Objective-C/Struts</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left" >Lab-type Contract in more than 2 years (On-going)</td>
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
                            <img className="img-fluid" src="../images/temp/15.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>05</h5>
                                <h2 className="title">Lorem Ipsum Website</h2>
                            </div>
                            <div className="title-desc">
                                <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s web applications.</p>
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
                        <td class="text-right font-weight-600" >Development Field</td>
                        <td class="text-left" >Sales</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Client Size</td>
                        <td class="text-left" >11-100 employees</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Technologies</td>
                        <td class="text-left" >Java/Objective-C/Struts</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left" >Lab-type Contract in more than 2 years (On-going)</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                    </div>
                    </div>
                    </section>
                    <section className="ttm-row.zero-padding-section clearfix" id="project-6">
                      {/* aboutus-section */}
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>06</h5>
                                <h2 className="title">Lorem Ipsum Website</h2>
                            </div>
                            <div className="title-desc">
                                <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s web applications.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="../images/temp/14.jpg" title="single-img-nine" alt="single-img-nine" />
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
                        <td class="text-right font-weight-600" >Development Field</td>
                        <td class="text-left" >Sales</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Client Size</td>
                        <td class="text-left" >11-100 employees</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Technologies</td>
                        <td class="text-left" >Java/Objective-C/Struts</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left" >Lab-type Contract in more than 2 years (On-going)</td>
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


export default Projects_Web;
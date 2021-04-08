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
                            <img className="img-project" src="./images/temp/ec_site.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>01</h5>
                                <h2 className="title">E-commerce Site</h2>
                            </div>
                            <div className="title-desc">
                                <p>This is a B2B custom jewelry sale system. User would brought their own gemstone and choose the design they want on the system. Main function of this site included import, display 3D model of the jewelry of the browser and creating PDF file for orders, deliveries and billings</p>
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
                        <td class="text-left" >React-Featherjs-AWS Personalize</td>
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
                                <h2 className="title">Drag and Drop Mobile Application Builder</h2>
                            </div>
                            <div className="title-desc">
                                <p>A system that enabled you to create mobile applications without having to write any line of code. Just by dragging and dropping components on the browser, you can create any mobile applications that you want. </p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-project" src="./images/temp/drag_and_drop_app_builder.jpg" title="single-img-nine" alt="single-img-nine" />
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
                        <td class="text-left" >IT</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Team Size</td>
                        <td class="text-left" >10 pepople</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Technologies</td>
                        <td class="text-left" >React-Redux-Java-Spring Boot</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left align-middle" >Lab-type Contract in more than 10 months (On-going)</td>
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
                            <img className="img-project" src="./images/temp/hotel_management.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>03</h5>
                                <h2 className="title">Hotel Chain Management System</h2>
                            </div>
                            <div className="title-desc">
                                <p>This is a system that allow owner to assign tasks to hotels or hotels chains. We also implement the gantt chart fucntion to display the progress of each task based on the task's status.</p>
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
                        <td class="text-left" >6 people</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Technologies</td>
                        <td class="text-left" >React-Redux-Java-Spring Boot</td>
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
                                <h2 className="title">English Teacher Dispatching Management System</h2>
                            </div>
                            <div className="title-desc">
                                <p>This system manage the dispatching of english teacher to english learning event organized by school or organizations. By using series of information like teacher's schedule, address, contract, school's plan, budget,... thẻ project aims to increase the efficency of operation cost. </p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-project" src="./images/temp/teacher_dispatch_management.jfif" title="single-img-nine" alt="single-img-nine" />
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
                        <td class="text-left" >8 people</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Technologies</td>
                        <td class="text-left" >React-ReactHook-NodeJs</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left align-middle" >Lab-type Contract in more than 4 months (On-going)</td>
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
                            <img className="img-project" src="./images/temp/image_distribution.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>05</h5>
                                <h2 className="title">Image Distribution Website</h2>
                            </div>
                            <div className="title-desc">
                                <p>A website to distribute high-quality stock photos for commercial and personal use. User can download a limited amount of images for free at a set interval or upgrade to be able to download with no restrictions</p>
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
                        <td class="text-left" >Media</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Team Size</td>
                        <td class="text-left" >6 people</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Technologies</td>
                        <td class="text-left" >React-NodeJs-AWS</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left align-middle" >Project Based – 1 year</td>
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
                                <h2 className="title">Swimming Record Storage System</h2>
                            </div>
                            <div className="title-desc">
                                <p>A website that keep tracks of record from swimming touraments all over Japan. You can check the touraments record by event, team or individual swimmer and compare record with visual graphs.  </p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-project" src="./images/temp/swim_record.jpg" title="single-img-nine" alt="single-img-nine" />
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
                        <td class="text-left" >Sports</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Team Size</td>
                        <td class="text-left" >5 people</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Technologies</td>
                        <td class="text-left" >React-FeatherJs</td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-600" >Contract Type - Developing duration</td>
                        <td class="text-left align-middle" >Lab-type Contract in 4 months</td>
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
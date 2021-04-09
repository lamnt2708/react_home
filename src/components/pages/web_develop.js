import React, { Component } from 'react';
import { MDBProgress } from 'mdbreact';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import Header from '../layout/Header';
import { HashLink as Link } from 'react-router-hash-link';

export class Web_Develop extends Component {
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
                            <h1 className="title">Website Development</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/'} ><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Services : : Website Development</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                {/* Company section */}

                    <div className="container-xl mt-5">
                  <div className="col-md-12">

                    <div className="col-md-8 offset-md-2 px-md-0 ">
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lorem purus. Duis eros odio, aliquet eu turpis sed, vehicula pulvinar lacus. Donec sed faucibus ante, sit amet dignissim sapien</h5>
                    </div>
                    </div>
                    </div>


                {/* Companysection end*/}
                
                <section className="ttm-row aboutus-section clearfix">
                    <div className="container-xl">

                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h2 className="title">Why Choose Us</h2>
                        
                      </div>
                    </div>{/* section title end */}
   
                    </div>
                    </div>
                    {/* aboutus-section */}

                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="./images/temp/13.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>Lorem ipsum</h5>
                                <h2 className="title">Lorem ipsum<br /> dolor sit amet <span>consectetur</span></h2>
                            </div>
                            <div className="title-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lorem purus. Duis eros odio, aliquet eu turpis sed, vehicula pulvinar lacus.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        </div>
                    </div>
                    </section>

                 {/* aboutus-section end */}
                 

                <section className="ttm-row.zero-padding-section clearfix">
 
                                {/* aboutus-section */}

                    <div className="container-xl">
                    <div className="row">{/* row */}

                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>Lorem ipsum</h5>
                                <h2 className="title">Lorem ipsum<br /> dolor sit amet <span>consectetur</span></h2>
                            </div>
                            <div className="title-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lorem purus. Duis eros odio, aliquet eu turpis sed, vehicula pulvinar lacus.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="./images/temp/14.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        </div>
                    </div>
                    </section>
                                    <section className="ttm-row clearfix">
 
                                {/* aboutus-section */}

                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="./images/temp/15.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>Lorem ipsum</h5>
                                <h2 className="title">Lorem ipsum<br /> dolor sit amet <span>consectetur</span></h2>
                            </div>
                            <div className="title-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lorem purus. Duis eros odio, aliquet eu turpis sed, vehicula pulvinar lacus.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>

                        </div>
                    </div>
                    </section>
                    
                 {/* aboutus-section end */}
                 <section className="ttm-row.zero-padding-section aboutus-section clearfix">
                    <div className="container-xl">

                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h2 className="title">Our works</h2>
                        
                      </div>
                    </div>{/* section title end */}
                    <div className="content-inner active">
                              {/* row */}
                              <div className="row multi-columns-row ttm-boxes-spacing-10px ttm-bgcolor-white">
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/ec_site.jpg" alt="ec_site" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Sales</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_web#project-1'>E-commerce Site</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/drag_and_drop_app_builder.jpg" alt="app builder" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>IT</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_web#project-2'>Drag and Drop Mobile Application Builder System</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/hotel_management.jpg" alt="Hotel management" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Services</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_web#project-3'>Hotel Chain Management System</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/teacher_dispatch_management.jfif" alt="teacher_dispatch_management" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Education</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_web#project-4'>English Teacher Dispatching Management System</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/image_distribution.jpg" alt="image_distribution" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Media</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_web#project-5'>Image Distribution Website</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/swim_record.jpg" alt="swim_record" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Sports</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_web#project-6'>Swimming Record Storage System</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div> 
                              </div>{/* row end */}
                            </div>{/* content-inner */}{/* row end*/}
                    </div>
                    </div>
                    </section>               
                    <section className="ttm-row aboutus-section clearfix">
                    <div className="container-xl">
 
                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">

                        <h2 className="title">Technical Stack</h2>
                      </div>
                    </div>{/* section title end */}
                  </div>

                  <div className="title-desc">
                    <div className="client">
                    <img className="img-fluid" src="./images/temp/tech.jpg"></img>


                    </div>
                </div>


 

                    </div>
                </section>
            </div>
            )
    }
}


export default Web_Develop;
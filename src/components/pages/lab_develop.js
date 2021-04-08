import React, { Component } from 'react';
import { MDBProgress } from 'mdbreact';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import Header from '../layout/Header';
import { HashLink as Link } from 'react-router-hash-link';

export class Lab_Develop extends Component {
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
                            <h1 className="title">Lab Type Offshore Development</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/'} ><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Services : : Lab Type Offshore Development</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                {/* Company section */}
                <section className="ttm-row aboutus-section clearfix">
                    <div className="container-xl">

                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h2 className="title">What Is Lab Type Offshore Development?</h2>
                      </div>
                    </div>{/* section title end */}

                    <div className="col-md-8 offset-md-2 px-md-0 ">
                    <h5>Pellentesque vehicula interdum diam at sagittis. Aliquam sed purus vestibulum, sollicitudin dolor vel, efficitur turpis. </h5>
                    </div>
                    <img className="img-fluid" src="https://via.placeholder.com/1600X480/444444.jpg" />
                    </div>
                    </div>

                </section>
                {/* Companysection end*/}
            {/* process-section */}
            <section className="ttm-row.zero-padding-section process-section clearfix">
              <div className="container-xl">
                <div className="row">
                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">

                        <h2 className="title"><span>Benefits</span></h2>
                      </div>
                    </div>{/* section title end */}
                  </div>
                </div>
                {/* row */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ttm-processbox-wrapper">
                      <div className="ttm-processbox text-center">
                        <div className="ttm-box-image">
                          <img className="img-fluid" alt="step-one" title="step-one" src="./images/temp/step-one.jpg" />
                          <div className="process-num">
                            <span className="number">01</span>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title"><h5>Lorem ipsum</h5></div>
                          <div className="ttm-box-description">Aute irure dolor reprehenderit velit esse cillum dolore fugiat</div>
                        </div>
                      </div>
                      <div className="ttm-processbox text-center">
                        <div className="ttm-box-image">
                          <img className="img-fluid" alt="step-two" title="step-two" src="./images/temp/step-two.jpg" />
                          <div className="process-num">
                            <span className="number">02</span>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title"><h5>Lorem ipsum</h5></div>
                          <div className="ttm-box-description">Aute irure dolor reprehenderit velit esse cillum dolore fugiat</div>
                        </div>
                      </div>
                      <div className="ttm-processbox text-center">
                        <div className="ttm-box-image">
                          <img className="img-fluid" alt="step-three" title="step-three" src="./images/temp/step-three.jpg" />
                          <div className="process-num">
                            <span className="number">03</span>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title"><h5>Lorem ipsum</h5></div>
                          <div className="ttm-box-description">Aute irure dolor reprehenderit velit esse cillum dolore fugiat</div>
                        </div>
                      </div>
                      <div className="ttm-processbox text-center res-991-mb-0">
                        <div className="ttm-box-image">
                          <img className="img-fluid" alt="step-four" title="step-four" src="./images/temp/step-four.jpg" />
                          <div className="process-num">
                            <span className="number">04</span>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title"><h5>Lorem ipsum</h5></div>
                          <div className="ttm-box-description">Aute irure dolor reprehenderit velit esse cillum dolore fugiat</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{/* row end */}
              </div>
            </section>
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
                                <h5>About us</h5>
                                <h2 className="title">Product development for<br /> better <span>Business</span></h2>
                            </div>
                            <div className="title-desc">
                                <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s web applications.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        </div>
                    </div>
                    </section>
                                    <section className="ttm-row.zero-padding-section clearfix">
 
                                {/* aboutus-section */}

                    <div className="container-xl">
                    <div className="row">{/* row */}

                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>About us</h5>
                                <h2 className="title">Product development for<br /> better <span>Business</span></h2>
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
                                <h5>About us</h5>
                                <h2 className="title">Product development for<br /> better <span>Business</span></h2>
                            </div>
                            <div className="title-desc">
                                <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s web applications.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>

                        </div>
                    </div>
                    </section>
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
                                      <img className="img-thumbnail-2" src="./images/temp/game_voice.jpg" alt="in_game_voice_chat" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Media</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-4'>In-game Voice Chat Application</Link></h5>
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
                                      <img className="img-thumbnail-2" src="./images/temp/english_learning.jpg" alt="english_learning_app" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Education</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-2'>English Study App for Japanese</Link></h5>
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
 
            </div>
            )
    }
}


export default Lab_Develop;
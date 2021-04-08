import React, { Component } from 'react';
import { MDBProgress } from 'mdbreact';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import Header from '../layout/Header';

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
                                      <img className="img-fluid" src="./images/temp/07.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Business , Campaign</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/#Single_blog'}>Innovative Technology</a></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-fluid" src="./images/temp/08.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Campaign , Technology</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/#Single_blog'}>IT Management</a></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-fluid" src="./images/temp/09.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Corporate , Workshop</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/#Single_blog'}>Cyber Security Analysis</a></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-fluid" src="./images/temp/10.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Innovation , Technology</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/#Single_blog'}>Web Development</a></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-fluid" src="./images/temp/11.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Corporate</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/#Single_blog'}>Neural Networking</a></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-fluid" src="./images/temp/12.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Technology , Workshop</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/#Single_blog'}>Data Management</a></h5>
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
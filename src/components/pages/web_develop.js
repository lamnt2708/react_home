import React, { Component } from 'react';
import { MDBProgress } from 'mdbreact';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import Header from '../layout/Header';

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
                    <h5>Based on our abundant development experience, React + works on design and development from the viewpoint of "ease of use" in response to customer's requests and provides website development in order to help lead customer's business to success.</h5>
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
                                      <img className="img-fluid" src="./images/temp/07.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Business , Campaign</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>Innovative Technology</a></h5>
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
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>IT Management</a></h5>
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
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>Cyber Security Analysis</a></h5>
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
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>Web Development</a></h5>
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
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>Neural Networking</a></h5>
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
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>Data Management</a></h5>
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
                    <img className="img-fluid" src="./images/temp/tech_01.png"></img>


                    </div>
                </div>


 

                    </div>
                </section>
            </div>
            )
    }
}


export default Web_Develop;
import React, { Component } from 'react';
import { MDBProgress } from 'mdbreact';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import Header from '../layout/Header';

export class Visions extends Component {
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
                            <h1 className="title">Vision</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/'} ><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>About Us : : Vision</span>
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
                        <h2 className="title">Vision</h2>
                      </div>
                    </div>{/* section title end */}

                    <div className="col-md-8 offset-md-2 px-md-0 ">
                    <h5>Pellentesque vehicula interdum diam at sagittis. Aliquam sed purus vestibulum, sollicitudin dolor vel, efficitur turpis. </h5>
                    </div>
                    </div>
                    </div>

                </section>
                {/* Companysection end*/}
                <section className="ttm-row aboutus-section clearfix">
                    <div className="container-xl">

                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h2 className="title">Misssion</h2>
                        
                      </div>
                    </div>{/* section title end */}
                    <div className="box-shadow content-tab">

                            <div className="content-inner active ml-5 mt-2 mb-2">
                                <p>1.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor luctus quam, ut placerat nisl sollicitudin at.</p>
                                <p>2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor luctus quam, ut placerat nisl sollicitudin at.</p>
                                <p>3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor luctus quam, ut placerat nisl sollicitudin at.</p>
                    </div>
                    </div>
                    </div>
                    </div>
                </section>
                <section className="ttm-row aboutus-section clearfix">
                    <div className="container-xl">

                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h2 className="title">Core Values</h2>
                      </div>
                    </div>{/* section title end */}

                    {/* row */}
                    <div className="row mt-70 res-991-mt-30">
                        <div className="col-lg-4 res-991-mb-20">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-system" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Make It Simple</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p>Lorem Ipsum is simply dummy text  ever since of the printing and typesetting industry.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                        <div className="col-lg-4 res-991-mb-20">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-data" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Unique Strategy</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p>Lorem Ipsum is simply dummy text  ever since of the printing and typesetting industry.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                        <div className="col-lg-4">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-analytics" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Unique Planning</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p>Lorem Ipsum is simply dummy text  ever since of the printing and typesetting industry.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                    </div>{/* row end*/}
                                        {/* row */}
                                        <div className="row mt-70 res-991-mt-30">
                        <div className="col-lg-4 res-991-mb-20">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-system" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Make It Simple</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p>Lorem Ipsum is simply dummy text  ever since of the printing and typesetting industry.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                        <div className="col-lg-4 res-991-mb-20">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-data" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Unique Strategy</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p>Lorem Ipsum is simply dummy text  ever since of the printing and typesetting industry.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                        <div className="col-lg-4">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-analytics" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Unique Planning</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p>Lorem Ipsum is simply dummy text  ever since of the printing and typesetting industry.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                    </div>{/* row end*/}
                    </div>
                    </div>

                </section>
 
            </div>
            )
    }
}


export default Visions;
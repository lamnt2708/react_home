import React, { Component } from 'react';
import { MDBProgress } from 'mdbreact';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import Header from '../layout/Header';

export class Greetings extends Component {
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
                            <h1 className="title">Greetings</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/'} ><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>About Us : : Greetings</span>
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

                        <h2 className="title">Greetings</h2>
                      </div>
                    </div>{/* section title end */}
                  </div>
                  <div className="row ml-2 mr-2">
                  <div className="title-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat est nec nisi ultricies, a congue lorem luctus. Nam quis nibh magna. Quisque iaculis nisi in facilisis condimentum. Cras vitae porta ligula, et ultrices ipsum. Duis ut neque a quam hendrerit cursus id a ipsum. Vestibulum ornare elit tellus, id mollis est efficitur dignissim. In at sollicitudin metus, a fringilla eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus turpis elit, fermentum ac viverra at, sagittis vulputate augue. Cras maximus ultricies ipsum, eu eleifend mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi elementum ut nisi sed venenatis. In vel libero convallis enim blandit viverra sit amet quis nisi. Cras venenatis quam vitae leo dignissim, non elementum enim pulvinar. Proin mollis dui blandit, maximus ex non, ornare sem. Fusce id blandit odio.</p>
                            <p>Pellentesque vehicula interdum diam at sagittis. Aliquam sed purus vestibulum, sollicitudin dolor vel, efficitur turpis. Ut lacinia lacus ut nunc tristique porttitor. Integer dui eros, sodales vel magna non, molestie mattis metus. Integer sollicitudin ex magna, eget tristique lectus lacinia pellentesque. Cras ac justo ut libero blandit scelerisque. Curabitur accumsan tortor ut risus commodo, sit amet cursus neque dictum.</p>
                            <p>Pellentesque vehicula interdum diam at sagittis. Aliquam sed purus vestibulum, sollicitudin dolor vel, efficitur turpis. Ut lacinia lacus ut nunc tristique porttitor. Integer dui eros, sodales vel magna non, molestie mattis metus. Integer sollicitudin ex magna, eget tristique lectus lacinia pellentesque. Cras ac justo ut libero blandit scelerisque. Curabitur accumsan tortor ut risus commodo, sit amet cursus neque dictum.</p>
                </div>


 
                </div>
                    </div>
                </section>
                {/* Companysection end*/}
                {/* CEO */}

              <div className="container-xl">
              <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h2 className="title">CEO Profile</h2>
                      </div>
                    </div>
                <div className="row no-gutters align-items-center">{/* row */}
                  <div className="col-lg-6 res-991-text-center res-991-mb-40">
                    {/* ttm_single_image-wrapper */}
                    <div className="ttm_single_image-wrapper">
                      <img className="img-fluid" src="https://via.placeholder.com/568X675/444444.png" title="single-img-two" alt="single-img-two" />
                    </div>{/* ttm_single_image-wrapper end */}
                  </div>
                  <div className="col-lg-6">
                    <div className="spacing-4 ttm-bgcolor-grey">
                      {/* section title */}
                      <div className="section-title with-desc clearfix">
                        <div className="title-header">
                          <h5>LUONG XUAN HAI</h5>
                        </div>
                        <div className="title-desc">
                        <p>2009: Work as Java Engineer</p>
                        <p>2011: Founded WeTask Platform with friend from Harvard Business School (Boston, M.A, U.S)</p>
                        <p>2014: Founded VnValley – An Apple Watch Application Development Company with engineers from Google and DropBox</p>
                        <p>2015: Founded Sphinx JSC - JavaScript Company (Sold in 2017)</p>
                        <p>2018: Founded The First One (thefirstone.jp) an BPO and Testing Company</p>
                        <p>2018: Founded React-Plus.com, React and React Native company</p>
                        </div>
                      </div>{/* section title end */}

                      {/* separator */}
                      <div className="separator">
                        <div className="sep-line mt-4 mb-4" />
                      </div>
                      {/* separator */}
                      <div className="row align-items-center">
                        <div className="col-md-3 col-lg-4 col-5">
                          <div className="text-left pt-15">
                            <img className="img-fluid" src="https://via.placeholder.com/145X60/444444.png" alt="about-sign" />
                          </div>
                        </div>
                        <div className="col-md-9 col-lg-8 col-7">
                          {/*  featured-icon-box */} 
                          <div className="featured-icon-box without-icon text-left pt-15">
                            <div className="featured-content">{/*  featured-content */}
                              <div className="featured-title">{/*  featured-title */}
                                <h5>LUONG XUAN HAI</h5>
                              </div>
                              <div className="featured-desc">{/*  featured-desc */}
                                <p>Chairman &amp; Founder React+</p>
                              </div>
                            </div>
                          </div>{/*  featured-icon-box END */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* row end */}
                {/* row */}
                <div className="row">
                </div>{/* row end*/}
              </div>

            {/* CEO */}
            </div>
            )
    }
}


export default Greetings;
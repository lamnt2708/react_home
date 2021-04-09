import React, { Component } from 'react';
import Slider from 'react-slick';
import { MDBProgress } from 'mdbreact';
import  Header  from './layout/Header';
import { CarouselPage } from './banner/Home1_banner';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FadeIn from 'react-fade-in';
import CountUp from 'react-countup';


const images = [
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg'
];

export class Home extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
    render() {
      const { photoIndex, isOpen } = this.state;
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
      
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
        };
        
        return (       
          <div className="site-main">   
            <Header/>            
            {/* home banner */}
            <CarouselPage/>{/* home banner end*/}

            {/* head service-section */}     
            <section className="ttm-row service-section position-relative z-1 clearfix">
              <div className="container-xl">
                <div className="row no-gutters featured-icon-box-style1-row ttm-bgcolor-darkgrey">
                  <div className="col-md-4">
                    <div className="featured-icon-box left-icon style1 ttm-bgcolor-skincolor ttm-textcolor-white h-100">
                      <div className="featured-icon">{/*  featured-icon */} 
                        <div className="ttm-icon ttm-bgcolor-darkgrey ttm-icon_element-size-md">
                          <i className="flaticon flaticon-system" />{/*  ttm-icon */} 
                        </div>
                      </div>
                      <div className="featured-content">{/*  featured-content */}
                        <div className="featured-title">{/*  featured-title */}
                          <h5>Trusted Services</h5>
                        </div>
                        <div className="featured-desc">{/*  featured-desc */}
                          <p>We Are Trusted Our Customers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    {/*  featured-icon-box */} 
                    <div className="featured-icon-box left-icon style1 ttm-bgcolor-darkgrey ttm-textcolor-white">
                      <div className="featured-icon">{/*  featured-icon */} 
                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md">
                          <i className="flaticon flaticon-clock" />{/*  ttm-icon */} 
                        </div>
                      </div>
                      <div className="featured-content">{/*  featured-content */}
                        <div className="featured-title">{/*  featured-title */}
                          <h5>24/7 Support</h5>
                        </div>
                        <div className="featured-desc">{/*  featured-desc */}
                          <p>000 7845 114- 123 4567 890</p>
                        </div>
                      </div>
                    </div>{/*  featured-icon-box END */}
                  </div>
                  <div className="col-md-4">
                    {/*  featured-icon-box */} 
                    <div className="featured-icon-box left-icon style1 ttm-bgcolor-skincolor ttm-textcolor-white">
                      <div className="featured-icon">{/*  featured-icon */} 
                        <div className="ttm-icon ttm-bgcolor-darkgrey ttm-icon_element-size-md">
                          <i className="flaticon flaticon-developer" />{/*  ttm-icon */} 
                        </div>
                      </div>
                      <div className="featured-content">{/*  featured-content */}
                        <div className="featured-title">{/*  featured-title */}
                          <h5>Expert &amp; Professional</h5>
                        </div>
                        <div className="featured-desc">{/*  featured-desc */}
                          <p>We Are Trusted Our Customers</p>
                        </div>
                      </div>
                    </div>{/*  featured-icon-box END */}
                  </div>
                </div>
              </div>
            </section>
            {/* head service-section end */}
              {/* service-section */}
                  <section className="element-row element-style clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title clearfix">
                                <h2 className="title">Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row res-991-text-center">
                            <div className="col-md-6 col-lg-4 res-991-mb-20">
                                {/* featured-imagebox-services */}
                                <div className="featured-imagebox featured-imagebox-services style1">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" src="./images/temp/01.jpg" alt="image" />
                                    </div> 
                                    <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/It_consultancy'}>Lab Type Offshore Developement</a></h5>
                                    </div>
                                    <div className="featured-desc">{/* featured-title */}
                                        <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                    <a className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right mt-2" href={process.env.PUBLIC_URL + '/It_consultancy'}>Read More <i className="ti ti-angle-double-right" /></a>
                                    </div>
                                </div>
                                {/* featured-imagebox-services */}
                            </div>
                            <div className="col-md-6 col-lg-4 res-991-mb-20">
                                {/* featured-imagebox-services */}
                                <div className="featured-imagebox featured-imagebox-services style1">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" src="./images/temp/02.jpg" alt="image" />
                                    </div> 
                                    <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/Digital_services'}>Application Development</a></h5>
                                    </div>
                                    <div className="featured-desc">{/* featured-title */}
                                        <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                    <a className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right mt-2" href={process.env.PUBLIC_URL + '/Digital_services'}>Read More <i className="ti ti-angle-double-right" /></a>
                                    </div>
                                </div>
                                {/* featured-imagebox-services */}
                            </div>
                            <div className="col-md-6 col-lg-4">
                                {/* featured-imagebox-services */}
                                <div className="featured-imagebox featured-imagebox-services style1">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" src="./images/temp/03.jpg" alt="image" />
                                    </div> 
                                    <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/Advisory_services'}>Website Developement</a></h5>
                                    </div>
                                    <div className="featured-desc">{/* featured-title */}
                                        <p>Reprehenderit in voluptate velit esse cillum pariatur pariatur cillum nulla pariatur.</p>
                                    </div>
                                    <a className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right mt-2" href={process.env.PUBLIC_URL + '/Advisory_services'}>Read More <i className="ti ti-angle-double-right" /></a>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </section>
            {/* service-section end*/}          
            {/* Tab section */}
            <section className="ttm-row tab-section clearfix">
              <div className="container-xl">
                <div className="row">
                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">

                        <h2 className="title">Here are some of our<span> Projects </span></h2>
                      </div>
                    </div>{/* section title end */}
                  </div>
                </div>
                {/* row end */}
                {/* row */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ttm-tabs text-center ttm-tab-style-classic style1">
                    <Tabs defaultIndex={0} onSelect={index => console.log(index)}>{/* tabs */}
                      <TabList className="tabs">
                        <Tab className="tab" title="Hi-Tech"><span><i className="flaticon flaticon-report" /> Remark</span></Tab>
                        <Tab className="tab" title="Media"><span><i className="flaticon flaticon-computer" /> Application</span></Tab>
                        <Tab className="tab" title="Industrial"><span><i className="flaticon flaticon-system" /> Website</span></Tab>
                      </TabList>
                      <div className="box-shadow content-tab">
                        <FadeIn>
                        <TabPanel>
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
                        </TabPanel>
                        <TabPanel>
                            <div className="content-inner">
                              {/* row */}
                              <div className="row multi-columns-row ttm-boxes-spacing-10px ttm-bgcolor-white">
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-fluid" src="./images/temp/09.jpg" alt="image" />
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
                                      <img className="img-fluid" src="./images/temp/07.jpg" alt="image" />
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
                                      <img className="img-fluid" src="./images/temp/12.jpg" alt="image" />
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
                                      <img className="img-fluid" src="./images/temp/11.jpg" alt="image" />
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
                        </TabPanel>
                        <TabPanel>
                            <div className="content-inner">
                              {/* row */}
                              <div className="row multi-columns-row ttm-boxes-spacing-10px ttm-bgcolor-white">
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-fluid" src="./images/temp/10.jpg" alt="image" />
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
                                      <img className="img-fluid" src="./images/temp/11.jpg" alt="image" />
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
                                      <img className="img-fluid" src="./images/temp/12.jpg" alt="image" />
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
                                      <img className="img-fluid" src="./images/temp/07.jpg" alt="image" />
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
                                      <img className="img-fluid" src="./images/temp/08.jpg" alt="image" />
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
                                      <img className="img-fluid" src="./images/temp/09.jpg" alt="image" />
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
                        </TabPanel>
                        </FadeIn>
                      </div>
                    </Tabs>  {/* tabs end*/}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* tab section end */}
            {/* Accomplishment */}
            <section className="element-row element-style clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="section-title clearfix">
                                <h2 className="title">Our Accomplishment</h2>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="ttm-row  ttm-bgcolor-darkgrey ttm-bg clearfix">
                    <div className="container-xl">
                        {/* row */}
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                            {/*  ttm-icon */}
                            <div className="ttm-fid inside ttm-fid-view-topicon">
                                <div className="ttm-fid-icon-wrapper">
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-online-library" />{/*  ttm-icon */} 
                                </div>
                                </div>
                                <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                                <h4>
                                    <CountUp start={0} end={458} duration={30} />
                                </h4>
                                <h3 className="ttm-fid-title">Completed Projects</h3>{/*  ttm-fid-title */}
                                </div>{/* ttm-fid-contents end */}
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                            {/*  ttm-icon */}
                            <div className="ttm-fid inside ttm-fid-view-topicon">
                                <div className="ttm-fid-icon-wrapper">
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-developer" />{/*  ttm-icon */} 
                                </div>
                                </div>
                                <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                                <h4>
                                    <CountUp start={0} end={954} duration={30} />
                                </h4>
                                <h3 className="ttm-fid-title">Happy Clients</h3>{/*  ttm-fid-title */}
                                </div>{/* ttm-fid-contents end */}
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                            {/*  ttm-icon */}
                            <div className="ttm-fid inside ttm-fid-view-topicon">
                                <div className="ttm-fid-icon-wrapper">
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-24h" />{/*  ttm-icon */} 
                                </div>
                                </div>
                                <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                                <h4>
                                    <CountUp start={0} end={897} duration={30} />
                                </h4>
                                <h3 className="ttm-fid-title">Services Provider</h3>{/*  ttm-fid-title */}
                                </div>{/* ttm-fid-contents end */}
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                            {/*  ttm-icon */}
                            <div className="ttm-fid inside ttm-fid-view-topicon">
                                <div className="ttm-fid-icon-wrapper">
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-report" />{/*  ttm-icon */} 
                                </div>
                                </div>
                                <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                                <h4>
                                    <CountUp start={0} end={785} duration={30} />
                                </h4>
                                <h3 className="ttm-fid-title">Cloud Designs</h3>{/*  ttm-fid-title */}
                                </div>{/* ttm-fid-contents end */}
                            </div>
                            </div>
                        </div>
                        {/* row end*/}
                        </div>


                    </div>
                </section>
            {/* Accomplishment end */}
            {/* Clients */}
            <section className="element-row element-style clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title clearfix">
                                <h2 className="title">Our Clients</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ttm-row res-991-p-0 ttm-bgcolor-darkgrey ttm-bg clearfix">
                        <div className="container-xl">
                            <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={5}>
                                <div className="ttm-box-col-wrapper">
                                    <div className="client-box ttm-box-view-boxed-logo">
                                        <div className="client">
                                            <div className="ttm-client-logo-tooltip" data-tooltip="client-01">
                                                <img className="img-fluid" src="./images/temp/client-01.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ttm-box-col-wrapper">
                                    <div className="client-box ttm-box-view-boxed-logo">
                                        <div className="client">
                                            <div className="ttm-client-logo-tooltip" data-tooltip="client-02">
                                                <img className="img-fluid" src="./images/temp/client-02.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ttm-box-col-wrapper">
                                    <div className="client-box ttm-box-view-boxed-logo">
                                        <div className="client">
                                            <div className="ttm-client-logo-tooltip" data-tooltip="client-03">
                                                <img className="img-fluid" src="./images/temp/client-03.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ttm-box-col-wrapper">
                                    <div className="client-box ttm-box-view-boxed-logo">
                                        <div className="client">
                                            <div className="ttm-client-logo-tooltip" data-tooltip="client-04">
                                                <img className="img-fluid" src="./images/temp/client-04.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ttm-box-col-wrapper">
                                    <div className="client-box ttm-box-view-boxed-logo">
                                        <div className="client">
                                            <div className="ttm-client-logo-tooltip" data-tooltip="client-05">
                                                <img className="img-fluid" src="./images/temp/client-02.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>
            {/* Clients*/}


          </div>
        )
    }
}


export default Home;

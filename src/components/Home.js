import React, { Component } from 'react';
import Slider from 'react-slick';
import { MDBProgress } from 'mdbreact';
import { Header } from './layout/Header';
import { CarouselPage } from './banner/Home1_banner';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FadeIn from 'react-fade-in';
import CountUp from 'react-countup';
import { HashLink as Link } from 'react-router-hash-link';


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
                                        <h5><a href={process.env.PUBLIC_URL + '/lab_develop'}>Lab Type Offshore Developement</a></h5>
                                    </div>
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
                                        <h5><a href={process.env.PUBLIC_URL + '/app_develop'}>Application Development</a></h5>
                                    </div>
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
                                        <h5><a href={process.env.PUBLIC_URL + '/web_develop'}>Website Developement</a></h5>
                                    </div>
                                    {/*<div className="featured-desc"> featured-title 
                                        <p>Reprehenderit in voluptate velit esse cillum pariatur pariatur cillum nulla pariatur.</p>
                                    </div>*/}
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
                        <Tab className="tab" title="Remark"><span><i className="flaticon flaticon-report" /> Remark</span></Tab>
                        <Tab className="tab" title="Website"><span><i className="flaticon flaticon-computer" /> Website</span></Tab>
                        <Tab className="tab" title="Application"><span><i className="flaticon flaticon-system" /> Application</span></Tab>
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
                                      <img className="img-thumbnail-2" src="./images/temp/pos.jfif" alt="pos app" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Sales</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-1'>POS Application For Tablet</Link></h5>
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
                                      <img className="img-thumbnail-2" src="./images/temp/busses_track.jpg" alt="busses_track_app" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Services</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-3'>Bus Track Application</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                              </div>{/* row end */}
                            </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                        <div className="content-inner ">
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
                        </TabPanel>
                        <TabPanel>
                        <div className="content-inner ">
                              {/* row */}
                              <div className="row multi-columns-row ttm-boxes-spacing-10px ttm-bgcolor-white">
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/pos.jfif" alt="pos app" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Sales</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-1'>POS Application For Tablet</Link></h5>
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
                                      <img className="img-thumbnail-2" src="./images/temp/busses_track.jpg" alt="busses_track_app" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Services</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-3'>Bus Track Application</Link></h5>
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
                                      <img className="img-thumbnail-2" src="./images/temp/matching_app.jpg" alt="matching_app" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Services</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-5'>Matching App</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/message.jpg" alt="message_app" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Services</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-6'>Medical Messaging App</Link></h5>
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

import React, { Component } from "react";
import Header from "../layout/Header";
import { connect } from "react-redux";
import mapStateToProps from '../switchLanguage/SwitchLanguage/messageSelector'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact_02 extends Component {
  constructor(props) {
    super(props);
    this.state = {message: props.message}
  }

  componentDidUpdate(prevProps, prevState){
      if(prevProps !== this.props){
          this.setState({message: this.props.message})
      }
  }

  render() {
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
                    <h1 className="title">{this.state.message["contactus.tittle"]}</h1>
                  </div>
                  {/* /.page-title-captions */}
                  <div className="breadcrumb-wrapper">
                    <span>
                      <a
                        title="Homepage"
                        href={process.env.PUBLIC_URL + "/Single_blog"}
                      >
                        <i className="ti ti-home" />
                        &nbsp;&nbsp;Home
                      </a>
                    </span>
                    <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                    <span>Contact 02</span>
                  </div>
                </div>
              </div>
              {/* /.col-md-12 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* page-title end*/}
        <section className="ttm-row contact-section clearfix">
          <div className="container-xl">
            <div className="row">
              {/* row */}
              <div className="col-lg-8 offset-lg-2">
                {/* section-title */}
                <div className="section-title with-desc text-center clearfix">
                  <div className="title-header">
                    <h2 className="title">{this.state.message["contactus.tittle"]}</h2>
                    <h5>{this.state.message["contactus.form.subtittle1"]}
                    <br/>
                    {this.state.message["contactus.form.subtittle2"]}
                    </h5>
                  </div>
                </div>
                {/* section-title end */}
              </div>
            </div>
            {/* row end */}
            {/* row */}
            <form
              id="ttm-quote-form"
              className="row ttm-quote-form clearfix"
              method="post"
              action="#"
            >
              <div className="col-sm-12 col-md-12" style={{ padding: "1rem" }}>
                <div className="form-group">
                  <label htmlFor="name">{this.state.message["contactus.form.fullname"]}</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control bg-white border"
                    placeholder="Full Name*"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">{this.state.message["contactus.form.companyname"]}</label>
                  <input
                    name="company"
                    type="text"
                    className="form-control bg-white border"
                    placeholder="Company Name*"
                    required="required"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-12" style={{ padding: "1rem" }}>
                <div className="form-group">
                  <label htmlFor="phone">{this.state.message["contactus.form.phone"]}</label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Phone Number*"
                    required="required"
                    className="form-control bg-white border"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-12" style={{ padding: "1rem" }}>
                <div className="form-group">
                  <label htmlFor="address">{this.state.message["contactus.form.email"]}</label>
                  <input
                    name="address"
                    type="text"
                    placeholder="Email Address*"
                    required="required"
                    className="form-control bg-white border"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-12" style={{ padding: "1rem" }}>
                <div className="form-group">
                  <label htmlFor="message">{this.state.message["contactus.form.message"]}</label>
                  <textarea
                    name="Message"
                    rows={5}
                    placeholder="Write A Message..."
                    required="required"
                    className="form-control bg-white border"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="text-center">
                  <button
                    type="submit"
                    id="submit"
                    className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor mt-5 res-991-mt-20"
                    value
                  >
                    Submit Massage
                  </button>
                </div>
              </div>
            </form>
            {/* row end*/}
          </div>
        </section>

        {/* contact-box-section */}
        <div className="ttm-row contact-box-section ttm-bgcolor-grey clearfix">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-4 res-991-mb-60 res-991-mt-30">
                {/* featured-icon-box */}
                <div className="featured-icon-box style8 text-center box-shadow">
                  <div className="featured-icon">
                    {/* featured-icon*/}
                    <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle">
                      <i className="far fa-envelope" />
                    </div>
                  </div>
                  {/* featured-icon */}
                  <div className="featured-content">
                    {/* featured-content */}
                    <div className="featured-title">
                      <h5>Email</h5>
                      {/* featured-title */}
                    </div>
                    <div className="featured-desc">
                      {/* featured-description */}
                      <p>
                        <a href="mailto:info@example.com">info@example.com</a>
                        <br />
                        <a href="mailto:emailexample@demo.com">
                          emailexample@demo.com
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* featured-content END*/}
                </div>
                {/* featured-icon-box */}
              </div>
              <div className="col-lg-4 res-991-mb-60">
                {/* featured-icon-box */}
                <div className="featured-icon-box style8 text-center box-shadow">
                  <div className="featured-icon">
                    {/* featured-icon*/}
                    <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle">
                      <i className="fa fa-phone" />
                    </div>
                  </div>
                  {/* featured-icon */}
                  <div className="featured-content">
                    {/* featured-content */}
                    <div className="featured-title">
                      <h5>Phone</h5>
                      {/* featured-title */}
                    </div>
                    <div className="featured-desc">
                      {/* featured-description */}
                      <p>
                        +01-4488-64585458
                        <br />
                        11415(12456)2424
                      </p>
                    </div>
                  </div>
                  {/* featured-content END*/}
                </div>
                {/* featured-icon-box */}
              </div>
              <div className="col-lg-4">
                {/* featured-icon-box */}
                <div className="featured-icon-box style8 text-center box-shadow">
                  <div className="featured-icon">
                    {/* featured-icon*/}
                    <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle">
                      <i className="ti ti-target" />
                    </div>
                  </div>
                  {/* featured-icon */}
                  <div className="featured-content">
                    {/* featured-content */}
                    <div className="featured-title">
                      <h5>Address</h5>
                      {/* featured-title */}
                    </div>
                    <div className="featured-desc">
                      {/* featured-description */}
                      <p>
                        229 Young Street Irwin, PA 15642
                        <br />
                        New York
                      </p>
                    </div>
                  </div>
                  {/* featured-content END*/}
                </div>
                {/* featured-icon-box */}
              </div>
            </div>
          </div>
        </div>
        {/* contact-box-section end */}
        {/* map-section */}

        {/* map-section end */}
      </div>
    );
  }
}


export default connect(mapStateToProps, null)(Contact_02);

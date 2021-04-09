import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {locale: props.locale, message: props.message };
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
        console.log(this.props)
      this.setState({ message: this.props.message });
    }
  }

  render() {
    return (
      <nav id="menu" role="navigation" className="menu">
        <ul>
          <li className="menu-hasdropdown">
            <a href={process.env.PUBLIC_URL + "/"}>
              {this.state.message["menu.home"]}
            </a>
          </li>
          <li className="menu-hasdropdown">
            <a>{this.state.message["menu.aboutus"]}</a>
            <ul className="menu-dropdown">
              <li>
                <a href={process.env.PUBLIC_URL + "/company_info"}>
                  {this.state.message["menu.aboutus.companyinfo"]}
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/greetings"}>
                  {this.state.message["menu.aboutus.greetings"]}
                </a>
              </li>
              <li>
                <Link to='/visions'>
                  {this.state.message["menu.aboutus.visions"]}
                </Link>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/team_detail"}>
                  {this.state.message["menu.aboutus.ourteam"]}
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-hasdropdown">
            <a>{this.state.message["menu.service"]}</a>
            <ul className="menu-dropdown">
              <li>
                <a href={process.env.PUBLIC_URL + "/lab_develop"}>
                  {this.state.message["menu.service.laptype"]}
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/app_develop"}>
                  {this.state.message["menu.service.applicationdevelop"]}
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/web_develop"}>
                  {this.state.message["menu.service.websitedevelop"]}
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-hasdropdown">
            <a href={process.env.PUBLIC_URL + "/projects"}>
              {this.state.message["menu.project"]}
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    locale: state.locale,
    message: state.message,
  };
}

export default connect(mapStateToProps, null)(Menu);

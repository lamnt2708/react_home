import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Layout
import { Footer } from './components/layout/Footer';
// pages
import Home from './components/Home';
import Home2_Header2 from './components/Header_style_02';
import Home3_Header3 from './components/Header_style_03';
import Aboutus_01 from './components/pages/Aboutus_01';
import Aboutus_02 from './components/pages/Aboutus_02';
import Services_01 from './components/pages/Services_01';
import Services_02 from './components/pages/Services_02';
import Our_expert from './components/pages/Our_expert';
import Team_detail from './components/pages/Team_detail';
import Faq from './components/pages/Faq';
import Contact_01 from './components/pages/Contact_01';
import Contact_02 from './components/pages/Contact_02';
import Error from './components/pages/Error';
import Element from './components/pages/Element';
import ScrollToTop from './components/layout/Gotop';
import Company_Info from './components/pages/company_info';
import Greetings from './components/pages/greetings';
import Visions from './components/pages/visions';
import Lab_Develop from './components/pages/lab_develop';
import App_Develop from './components/pages/app_develop';
import Web_Develop from './components/pages/web_develop';
import Projects from './components/pages/projects';
import Projects_Web from './components/pages/projects_web';
import Projects_App from './components/pages/projects_app';

const appHistory = {
  basename: process.env.PUBLIC_URL
};
const history = createBrowserHistory(appHistory);
function App() {
 
  return (
    <div className="page">
      <Router basename={process.env.PUBLIC_URL} history={history}>  
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>   
        <ScrollToTop />
            <Route exact path='/' component={ Home } /> 
            <Route path='/header_style_02' component={ Home2_Header2 } />
            <Route path='/header_style_03' component={ Home3_Header3 } />
            <Route path="/aboutus_01" component={Aboutus_01} />
            <Route path="/aboutus_02" component={Aboutus_02} />
            <Route path="/services_01" component={Services_01} />
            <Route path="/services_02" component={Services_02} />
            <Route path={`${appHistory.basename}/our_expert`} component={Our_expert} />
            <Route path="/team_detail" component={Team_detail} />
            <Route path="/faq" component={Faq} />
            <Route path="/contact_01" component={Contact_01} />
            <Route path="/contact" component={Contact_02} />
            <Route path="/error" component={Error} />
            <Route path="/element" component={Element} />
            <Route path="/company_info" component={Company_Info} />
            <Route path="/greetings" component={Greetings} />
            <Route path="/visions" component={Visions} />
            <Route path="/lab_develop" component={Lab_Develop} />
            <Route path="/app_develop" component={App_Develop} />
            <Route path="/web_develop" component={Web_Develop} />
            <Route path="/projects" component={Projects} />
            <Route path="/projects_web" component={Projects_Web} />
            <Route path="/projects_app" component={Projects_App} />
        <Footer />
    </Router>  
    </div> 
  );
 }

export default App;

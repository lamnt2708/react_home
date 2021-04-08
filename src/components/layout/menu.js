import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export class Menu extends Component {
    render() {
        return (
            <nav id="menu" role="navigation" className="menu">
                <ul>
                    <li className="menu-hasdropdown"><a href={process.env.PUBLIC_URL + '/'}>Home</a>

                    </li>
                    <li className="menu-hasdropdown"><a>About Us</a>
                        <ul className="menu-dropdown">
                            <li><a href={process.env.PUBLIC_URL + '/company_info'}>Company's Info</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/greetings'}>CEO Greetings</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/visions'}>Visions</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/team_detail'}>Our Team</a></li>
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>Services</a>
                        <ul className="menu-dropdown">
                            <li><a href={process.env.PUBLIC_URL + '/lab_develop'}>Lab Type Offshore Development</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/app_develop'}>Appication Development</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/web_develop'}>Website Development</a></li>

                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>Project</a>
                    <ul className="menu-dropdown">
                            <li><a href={process.env.PUBLIC_URL + '/projects_web'}>Website</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/projects_app'}>Appication</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
    
            )
    }
}
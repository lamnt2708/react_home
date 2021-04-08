import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Menu extends Component {
    render() {
        return (
            <nav id="menu" role="navigation" className="menu">
                <ul>
                    <li className="menu-hasdropdown"><Link to={'/'}>Home</Link>

                    </li>
                    <li className="menu-hasdropdown"><a>About Us</a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/company_info'}>Company's Info</Link></li>
                            <li><Link to={'/greetings'}>CEO Greetings</Link></li>
                            <li><Link to={'/visions'}>Visions</Link></li>
                            <li><Link to={'/team_detail'}>Our Team</Link></li>
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>Services</a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/lab_develop'}>Lab Type Offshore Development</Link></li>
                            <li><Link to={'/app_develop'}>Appication Development</Link></li>
                            <li><Link to={'/web_develop'}>Website Development</Link></li>

                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>Project</a>
                    <ul className="menu-dropdown">
                            <li><Link to={'/projects_web'}>Website</Link></li>
                            <li><Link to={'/projects_app'}>Application</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )
    }
}

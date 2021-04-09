import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
MDBHamburgerToggler } from 'mdbreact';
import { HashRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom';

class Mobilemenu extends Component {
state = {
  collapse1: false,
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
    [collapseId]: !this.state[collapseId]
  });
}

render() {
  return (
    <Router>
        <MDBNavbar>
            <MDBHamburgerToggler id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBDropdown>
                        <MDBDropdownToggle nav>
                        <span ><Link to='/'>Home</Link></span>
                        </MDBDropdownToggle>
                        {/* <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/'}>Homepage 1</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Home2'}>Homepage 2</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Home3'}>Homepage 3</MDBDropdownItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span>Header Styles</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem href={process.env.PUBLIC_URL + '/'}>Header Style 01</MDBDropdownItem>
                                    <MDBDropdownItem target="_blank" href={process.env.PUBLIC_URL + '/Header_style_02'}>Header Style 02</MDBDropdownItem>
                                    <MDBDropdownItem target="_blank" href={process.env.PUBLIC_URL + '/Header_style_03'}>Header Style 03</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                            </MDBDropdownMenu> */}
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span>About Us</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem ><Link to={'/company_info'}>Company's Info</Link></MDBDropdownItem>
                            <MDBDropdownItem ><Link to={'/greetings'}>CEO Greetings</Link></MDBDropdownItem>
                            <MDBDropdownItem ><Link to={'/visions'}>Visions</Link></MDBDropdownItem>
                            <MDBDropdownItem ><Link to={'/team_detail'}>Our Team</Link></MDBDropdownItem>
                            {/* <MDBDropdownItem href={process.env.PUBLIC_URL + '/Our_expert'}>Our Expert</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Faq'}>FAQs</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Contact_01'}>Contact Us 1</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Contact_02'}>Contact Us 2</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Error'}>Error Page</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Element'}>Elements</MDBDropdownItem> */}
                        </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span>services</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem ><Link to={'/lab_develop'}>Lab Type Offshore Development</Link></MDBDropdownItem>
                            <MDBDropdownItem ><Link to={'/app_develop'}>Appication Development</Link></MDBDropdownItem>
                            <MDBDropdownItem ><Link to={'/web_develop'}>Website Development</Link></MDBDropdownItem>
                            {/* <MDBDropdownItem href={process.env.PUBLIC_URL + '/Data_structuring'}>Data Structuring</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Experience_design'}>Experience Design</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Content_engineering'}>Content Engineering</MDBDropdownItem> */}
                        </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span>Projects</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem ><Link to={'/projects_web'}>Website</Link></MDBDropdownItem>
                            <MDBDropdownItem ><Link to={'/projects_app'}>Application</Link></MDBDropdownItem>
                            {/* <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span>Project Single</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem href={process.env.PUBLIC_URL + '/Single_style1'}>Single Style 01</MDBDropdownItem>
                                    <MDBDropdownItem href={process.env.PUBLIC_URL + '/Single_style2'}>Single Style 02</MDBDropdownItem>
                                    <MDBDropdownItem href={process.env.PUBLIC_URL + '/Single_style3'}>Single Style 03</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown> */}
                            </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  {/* <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span>Blog</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Blog'}>Blog Classic</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Blog_grid'}>Blog Grid View</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Blog_top_image'}>Blog Top Image</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Blog_left_image'}>Blog Left Image</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Single_blog'}>Blog Single View</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span>Shop</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Shop'}>Default Shop</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Product_details'}>Single Product Details</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Cart'}>Cart</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Checkout'}>Checkout</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem> */}
                </MDBNavbarNav>
              </MDBCollapse>
          </MDBNavbar>
    </Router>
    );
  }
}

export default Mobilemenu;
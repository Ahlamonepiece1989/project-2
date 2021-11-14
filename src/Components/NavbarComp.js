import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import About from './About'

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar className="color-nav" variant= "light" expand="lg">
                        <Navbar.Brand href="#">Our Brand</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                                
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route exact path='/about' element={<About/>}/>
                          
                    
                        <Route exact path='/contact' element={<Contact/>}/>
                        
                        <Route  exact path='/home' element={<Home/>}/>
                     
                    </Routes>
                </div>
            </Router>
        )
    }
}

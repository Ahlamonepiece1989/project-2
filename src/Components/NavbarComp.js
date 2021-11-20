import React, { Component } from 'react';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import About from './About';
import Favorite from './favorite';



export default class NavbarComp extends Component {

  state={data:""}


   searchItems = (searchValue) => {
    this.setState({data: searchValue}); 

        };


    render() {
        return (
            <Router>
                <div>
      
                <Navbar className="color-nav" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">My Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>

        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/favorite">Favorite</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        
      </Nav>

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => this.searchItems(e.target.value)}
        />
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
                </div>
                <div>
                    <Routes>
                        <Route exact path='/about' element={<About/>}/>
                          
                    <Route exact path='/favorite' element={<Favorite/>}/>

                    
                        <Route exact path='/contact' element={<Contact/>}/>


                        
                        <Route  exact path='/' element={<Home data={this.state.data} />}/>
                     
                    </Routes>
                </div>
            </Router>


        );
    }
}

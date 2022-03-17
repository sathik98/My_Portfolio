import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes as Switch
} from "react-router-dom";

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Experience from '../pages/Experience';
import About from '../pages/About';
import Contact from '../pages/Contact';


function Header() {
    return (
        <>
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg" className='heading'>
                        <Container fluid>
                            <Navbar.Brand className='my_portfolio'>My Portfolio</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0 navi"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                                    <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route exact path='/' element={<Home />} />

                        <Route exact path="/profile" element={<Profile />} />

                        <Route exact path="/experience" element={<Experience />} />

                        <Route exact path="/about" element={<About />} />

                        <Route exact path="/contact" element={<Contact />} />

                    </Switch>
                </div>

            </Router>
            
        </>
    )
}

export default Header;
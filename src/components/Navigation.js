import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Pdf from '../Documents/EdwinResume.pdf';

import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <Navbar className="navbar" expand="lg">
                <Navbar.Brand href="#profile" style={{color: "white"}}>Edwin Hung</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbar-collapse">
                    <Nav className="mr-auto">
                        <Nav.Link pullLeft href="#aboutme" style={{color: "white", justifyContent: "right"}}>About Me</Nav.Link>
                        {/* <Nav.Link pullLeft href="#projects" style={{color: "white"}}>Projects</Nav.Link> */}
                        <Nav.Link pullLeft href="#skills" style={{color: "white"}}>Skills</Nav.Link>
                    </Nav>
                    <Nav style={{color: "white", margin: 0, right: 30, left: 'auto', position: "relative"}}>
                        <a href = {Pdf} target = "_blank">My Resume</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
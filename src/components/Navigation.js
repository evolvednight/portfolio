import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import Pdf from '../Documents/EdwinResume.pdf';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect fixed="top" expand="lg" style={{display:'flex', flexDirection:'row', textDecorationColor: 'white'}}>
                <Navbar.Brand href="#profile">Edwin Hung</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbarLeft">
                        <Nav.Link href="#aboutme">About Me</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#skills">Skils</Nav.Link>
                </Nav>
                <Nav className="navbarRight" style={{left: 'auto', position: 'fixed'}}>
                <a href = {Pdf} target = "_blank">My Resume</a>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
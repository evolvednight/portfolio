import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import Pdf from '../Documents/EdwinResume.pdf';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <Navbar fixed="top" variant="dark" expand="lg" style={{display:"flex", flexDirection:"row"}}>
                <Navbar.Brand href="#profile">Edwin Hung</Navbar.Brand>

                <Nav className="navbar" style={{display:"flex", flexDirection:"row"}}>
                        <Nav.Link href="#github">GitHub</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#skills">Skils</Nav.Link>
                </Nav>
                <Nav>
                <a href = {Pdf} target = "_blank">Resume Pdf</a>

                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;
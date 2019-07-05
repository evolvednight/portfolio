import React, { Component } from "react";
import { Navbar, Nav} from "react-bootstrap";
import Pdf from '../Documents/EdwinResume.pdf';

import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect className="navbar" fixed="top" expand="lg" style={{display:'flex', flexDirection:'row'}}>
                <Navbar.Brand href="#profile">Edwin Hung</Navbar.Brand>
                <Navbar.Collapse id="navbar-collapse">
                    <Nav className="mr-auto">
                        <div class ="linkPill" style={{display:'flex',flexDirection:'row'}}>
                        <div class="pill" style={{margin: 15}}>
                        <Nav.Link href="#aboutme" >About Me</Nav.Link>
                        </div>
                        <div class="pill"style={{margin: 15}}>
                        <Nav.Link href="#projects" >Projects</Nav.Link>
                        </div>
                        <div class="pill" style={{margin: 15}}>
                        <Nav.Link href="#skills" >Skills</Nav.Link>
                        </div>
                        </div>
                    </Nav>
                    <Nav className="mr-auto" style={{margin: 15, top: 0, right: 30, bottom: 20, left: 'auto', position: 'absolute'}}>
                        <a href = {Pdf} target = "_blank">My Resume</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
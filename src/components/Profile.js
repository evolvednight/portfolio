import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Typing from 'react-typing-animation';
import './Profile.css';
import Pdf from '../Documents/EdwinResume.pdf';

class Profile extends Component {
    render() {
        return (
            <div id="profile">
                <div class="intro">
                <Typing speed={100}>
                <h1>Hi, I am Edwin Hung</h1>
                <h2>Welcome to my website</h2>
                
                
                <div className="accessBtn">
                    <Button><a href ="https://github.com/evolvednight">GitHub</a></Button>
                    <Button><a href="https://www.linkedin.com/in/ehun">LinkedIn</a></Button>
                    <Button><a href = {Pdf} target = "_blank">Resume</a></Button>
                </div>
                </Typing>
                </div>
            </div>
                
        );
    }
}

export default Profile;
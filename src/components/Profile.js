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
                <a href ="https://github.com/evolvednight"><Button><i class="fa fa-github-square"></i>GitHub</Button></a>
                <a href="https://www.linkedin.com/in/ehun"><Button><i class="fa fa-linkedin-square"></i>LinkedIn</Button></a>
                <a href = {Pdf} target = "_blank"><Button><i class="far fa-address-card"></i>Resume</Button></a>
                </div>
                </Typing>
                </div>
            </div>
                
        );
    }
}

export default Profile;
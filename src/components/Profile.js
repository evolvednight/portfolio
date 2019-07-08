import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Typing from 'react-typing-animation';
import './Profile.css';
import Pdf from '../Documents/EdwinResume.pdf';

class Profile extends Component {
    render() {
        return (
            <div id="profile">
                <div class="intro">
                <Typing speed={100}>
                <div class="head1">
                <p>Hi, I am Edwin Hung</p>
                </div>
                <div class="head2">
                <p>Welcome to my website</p>
                </div>
                
                <div className="accessBtn">
                <a href ="https://github.com/evolvednight"><Button><i class="fa fa-github-square"></i>GitHub</Button></a>
                <a href = "https://www.linkedin.com/in/ehun"><Button><i class="fa fa-linkedin-square"></i>LinkedIn</Button></a>
                <a href = {Pdf} target = "_blank"><Button><i class="far fa-address-card"></i>Resume</Button></a>
                </div>
                </Typing>
                </div>
            </div>
                
        );
    }
}

export default Profile;
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Typing from 'react-typing-animation';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div id="profile">
                <div class="intro">
                <Typing speed={100}>
                <h1>Hi, I am Edwin Hung</h1>
                <h2>Welcome to my website</h2>
                </Typing>
                </div>
                <div className="accessBtn">
                    <Button>GitHub</Button>
                    <Button>LinkedIn</Button>
                    <Button>Resume</Button>
                </div>
            </div>
                
        );
    }
}

export default Profile;
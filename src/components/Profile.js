import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div id="profile">
                <div class="landing push100h center relative">
                <div class="typewriter center text-white text-lg">
                <div class="intro">
                <h1>Hi, I am Edwin Hung</h1>
                <h2>Welcome to my website</h2>

                </div>
                {/* <div className="accessBtn">
                    <Button></Button>
                </div> */}
                </div>
                </div>
            </div>
        );
    }
}

export default Profile;
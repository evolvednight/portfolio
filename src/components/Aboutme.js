import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Aboutme.css'

class Aboutme extends Component {
    render() {
        return (
            <div id="aboutme">
                <h1>About me</h1>
                <p>I am a full stack developer.  I was born and raised in Brooklyn.  Welcome to my website.  I updated this in regular basis.  I am going to update this to spring boot framework in the near future.</p>
            </div>
        );
    }
}

export default Aboutme;
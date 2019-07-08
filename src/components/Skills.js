import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Skills.css";

class Skills extends Component {
    render() {
        return (
            <div id="skills">
                <h1>Skills</h1>
                <p>React, Java, Python, JavaScript, Restful API</p>
                <p>Yahoo Stock API, Google map API, AWS</p>
                <p>Machine Learning, Computer Vision</p>

            </div>
        );
    }
}

export default Skills;
import React, { Component } from "react";
import './Aboutme.css';

class Aboutme extends Component {
    render() {
        return (
            <div id="aboutme">
                <h1>About me</h1>
                <p>I am a full stack developer.  I was born and raised in Brooklyn.  
                    Welcome to my website.  I updated this on a regular basis.  
                    I am going to update this to spring boot framework in the near future.</p>
                <p>I love skiing, hiking and coding.</p>
                <p>I have won three hackathons.  </p>
                <p>I recently graduated from University at Buffalo with a computer science degree in May of 2019.</p>
            </div>
        );
    }
}

export default Aboutme;
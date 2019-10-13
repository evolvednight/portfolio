import React, { Component } from "react";
import greenlight from "../images/greenlight.jpg";
import busPredictor from "../images/busPredictor.JPG";
import safechecker from "../images/MTBsafeChecker.JPG";
import enternalBlockchain from "../images/enternalBlockchain.JPG";
import gimme from "../images/gimme.JPG";
import "./Project.css";

class Project extends Component {
    render() {
        return (
            <section id="portfolio">
                <div style={{fontSize: 40, fontFamily:"helvetica", margin: 20}}>Competition and personal projects</div>
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://github.com/Scravlon/GreenLight" target="example" rel="noopener">
                            <img className="img-fluid" src={greenlight} alt="me" width="225px" height="300px" />
                                <div className="portfolio-box-caption"></div>
                                <div className="project-category">Buffalo Innovation Challenge 2019 Android App</div>
                                <div className="project-name">GreenLight</div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://github.com/evolvednight/UB-Blockchain-2019" target="example" rel="noopener">
                            <img className="img-fluid" src={safechecker} alt="me" width="225px" height="300px" />
                            <div className="portfolio-box-caption"></div>
                            <div className="project-category">Blockchain prototype project for UB Thinklab Competition</div>
                            <div className="project-name">SafeChecker</div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://master.d27xuxjt06k94t.amplifyapp.com/" target="example" rel="noopener">
                            <img className="img-fluid" src={greenlight} alt="me" width="225px" height="300px" />
                            <div className="portfolio-box-caption"></div>
                            <div className="project-category">Research Project for University at Buffalo Department of Psychology</div>
                            <div className="project-name">Sofia Research</div>
                        </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://github.com/evolvednight/UB-Blockchain-Buildathon" target="example" rel="noopener">
                            <img className="img-fluid" src={enternalBlockchain} alt="me" width="225px" height="300px" />
                            <div className="portfolio-box-caption"></div>
                            <div className="project-category">Second place for UB ACM hack night project 2019</div>
                            <div className="project-name">Bus lateness predictor model</div>
                        </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://github.com/aunik22/Bus-Lateness-Predictor-and-Visualizer" target="example" rel="noopener">
                            <img className="img-fluid" src={busPredictor} alt="me" width="225px" height="300px" />
                            <div className="portfolio-box-caption"></div>
                            <div className="project-category"> Second Place for UB Blockchain Thinklab Hackathon 2019</div>
                            <div className="project-name">SafeChecker</div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://github.com/Scravlon/UBHakNight_Spring2019" target="example" rel="noopener">
                            <img className="img-fluid" src={gimme} alt="me" width="225px" height="300px" />
                            <div className="portfolio-box-caption"></div>
                            <div className="project-category">UB ACM Hack Night 2019</div>
                            <div className="project-name">GimMe</div>
                            </a>
                        </div>
                    </div>
                </div>
           </section>
        );
    }
}

export default Project;
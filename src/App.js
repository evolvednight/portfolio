import React from 'react';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';

function App() {
  
    return (
      <Router>
      
        {/*navigation bar component*/}
      <div className="App">
      <Navigation />
      <Profile />
      <Aboutme />
      <Skills />
      {/* <Project /> */}
      </div>
      <Footer />
      </Router>
    );
  }

export default App;
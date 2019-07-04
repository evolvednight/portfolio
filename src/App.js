import React from 'react';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  
    return (
      <Router>
      
      <Navigation />  {/*navigation bar component*/}
      <div className="App">
      <Profile />
      <Aboutme />
      <Project />
      <Skills />
      </div>
      <Footer />
      </Router>
    );
  }

export default App;
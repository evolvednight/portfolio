import React from 'react';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  
    return (
      <Router>
      
      <Navigation />  {/*navigation bar component*/}
      <div className="App">
      wtf
      </div>
      <Footer />
      </Router>
    );
  }

export default App;
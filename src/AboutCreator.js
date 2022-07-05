import load from './load.gif';


import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



class AboutCreator extends React.Component {

  //Render
  render (){
    
  return (


    <div className="AboutCreator">


      <header className="App-header">
        
        <p>
          Checkout the creator at:
          </p>
        <p>
          <li><a
          className="App-link"
          href="https://twitter.com/EddieTHilton"
          target="_blank"
          rel="noopener noreferrer"
        >
          @EddieTHilton on Twitter
        </a>
        </li>
        
          <li><a
          className="App-link"
          href="https://www.linkedin.com/in/eddie-hilton-27930a143/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eddie Hilton on LinkedIn
        </a></li>
        
          <li><a
          className="App-link"
          href="https://eddiethilton.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eddie T. Hilton on Wordpress
        </a></li>

        <li><a
          className="App-link"
          href="https://github.com/EddieTHilton"
          target="_blank"
          rel="noopener noreferrer"
        >
          EddieTHilton on GitHub
        </a></li>
        <br />
        </p>
        
      </header>
    </div>
  );
  }
}

export default AboutCreator;

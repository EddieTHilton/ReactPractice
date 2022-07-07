import load from './load.gif';


import './Title.css';
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


      <header className="Title-header">
        
        <p>
          Checkout the creator at:
          </p>
        <p>
          <a
          className="Title-link"
          href="https://twitter.com/EddieTHilton"
          target="_blank"
          rel="noopener noreferrer"
        >
          @EddieTHilton on Twitter
        </a>
        <br />
        
        
          <a
          className="Title-link"
          href="https://www.linkedin.com/in/eddie-hilton-27930a143/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eddie Hilton on LinkedIn
        </a>
        <br />
        
          <a
          className="Title-link"
          href="https://eddiethilton.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eddie T. Hilton on Wordpress
        </a>
        <br />

        <a
          className="Title-link"
          href="https://github.com/EddieTHilton"
          target="_blank"
          rel="noopener noreferrer"
        >
          EddieTHilton on GitHub
        </a>
        <br />
        </p>
        
      </header>
    </div>
  );
  }
}

export default AboutCreator;

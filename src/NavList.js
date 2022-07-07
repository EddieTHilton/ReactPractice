import ETH_Logo from './ETH_Morse.png';


import './Title.css';
import AboutCreator from './AboutCreator'
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



class NavList extends React.Component {

  //Render
  render (){
    
    return (


        <div className="NavList">


            <header className="Title-header">
              <Router>
                <nav> 
                  
          
                <img src={ETH_Logo} className="Title-logo" alt="ETH_Logo" />
                  <h3>Welcome to</h3>
                  <h3>Eddie T. Hilton's Mega-Awesome Cinema Webapp</h3>


                </nav>
              </Router>
            </header>
        </div>
    );
  }
}

export default NavList;

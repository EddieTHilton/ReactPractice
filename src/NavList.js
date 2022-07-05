import load from './load.gif';


import './App.css';
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


            <header className="App-header">
              <Router>
                <nav> 
                  <h3>Eddie T. Hilton's Mega-Awesome Cinema Webapp</h3>


                </nav>
              </Router>
            </header>
        </div>
    );
  }
}

export default NavList;

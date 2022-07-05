import load from './load.gif';


import './App.css';
import React from 'react';

import BackupApp from './BackupApp.js'
import DummyPage from './DummyPage.js'
import AboutCreator from './AboutCreator.js'
import NavList from './NavList.js'

import {
  BrowserRouter as Router,
  Routes,
  Switch, 
  Route,
  Link
} from "react-router-dom";



class App extends React.Component {
  
  state = {
    actors: []
  };

/*

          <Router>
            <div className="App">
                
                  <h3>Eddie T. Hilton's Mega-Awesome Cinema Webapp</h3>
                  <Route path="/AboutCreator" component={AboutCreator} />

                
            </div>
          </Router>


*/

  //Render
  render (){
    //const dataDump = JSON.stringify(this.state.actors);
    //const { DataisLoaded, actors } = this.state;


      return (
        <div>
        <NavList />
        <Router>
          <div>
            <Route path="/AboutCreator" component={BackupApp} />
            <DummyPage />
            <AboutCreator />
          </div>
        </Router>
        </div>

      );
      
    
  }
}


//Routers functions

/*
function Home(){
  return <h2>Home Route</h2>
}

function About(){
  return <h2>About Route</h2>

}

function Users(){
  return <h2>Users Route</h2>

}
*/

export default App;

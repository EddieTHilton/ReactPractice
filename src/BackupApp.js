import load from './load.gif';


import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//import { usePromiseTracker } from "react-promise-tracker";



class App extends React.Component {

  //String dataDump = new String();
  
  state = {
    actors: []
  };

  async componentDidMount(){ // This is where the code connects witht he online API
      
      //Old fetch code kept commented out incase needed
      //const response = await fetch('https://springtest-1655723125490.azurewebsites.net/Home/Actor_ByID?actor_id=2');
      //const body = await response.json();
      
      fetch(
        "https://springtest-1655723125490.azurewebsites.net/Home/All_Actors") //This runs a fetch request then stores the result
                    .then((res) => res.json())
                    .then((json) => {
                        this.setState({
                            actors: json,
                            DataisLoaded: true
                        });
                    })


  }

  //Render
  render (){
    //const dataDump = JSON.stringify(this.state.actors);
    const { DataisLoaded, actors } = this.state;


    if(!DataisLoaded){
      return (
        <div className="App">
          <header className="App-header">
          
          <img src={load} className="App-logo" alt="load" />
      
          </header>
        </div>);
    } else {
      
    }
    //const actorById = String(this.state.actors[1].actor_id + " " + this.state.actors[1].first_name + " " + this.state.actors[1].last_name);
  return (

    

    <div className="App">


      <header className="App-header">
        
        <p>
          Welcome to <code>The Actor Database Project</code>, find a list of recorded actors below,
          <br />
          or come back soon for the upcoming random film picker.
          <br /><br />
        <br />
          List of requested actor(s):
          <br /><br />
          {actors.map((actor) => ( 
                <ol key = { actor.actor_id } >
                    ID No: { actor.actor_id }, First Name: { actor.first_name }
                    , Last Name { actor.last_name } 
                    </ol>
          ))}

          <br /><br />
        </p>
        
      </header>
    </div>
  );
  }
}

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

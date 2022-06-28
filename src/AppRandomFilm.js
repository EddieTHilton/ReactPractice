import load from './load.gif';


import './App.css';
import React from 'react';
//import { usePromiseTracker } from "react-promise-tracker";



class AppRandomFilm extends React.Component {

  //String dataDump = new String();
  
  state = {
    actors: []
  };

  async componentDidMount(){
      const response = await fetch('https://springtest-1655723125490.azurewebsites.net/Home/Actor_ByID?actor_id=2');
      //const response = await fetch('http://localhost:3306/Actors/All_Actors');
      const body = await response.json();
      //this.setState({actors: body});
      //const dataDump = "Hello"; //JSON.stringify(body);
      
      fetch(
        "https://springtest-1655723125490.azurewebsites.net/Home/All_Actors")
                    .then((res) => res.json())
                    .then((json) => {
                        this.setState({
                            actors: json,
                            DataisLoaded: true
                        });
                    })


  }


    


        
  //const {actors} = this.state;

//<div className="App-intro">
//           <h2>Actors</h2>
//           {actors.map(actor =>
//              <div key={actor.id}>
//                 {actor.firstname} {actor.lastname})
//              </div>
 //          )}
//        </div>


  render (){
    const dataDump = JSON.stringify(this.state.actors);
    const { DataisLoaded, actors } = this.state;
    //var conditionalBody = null;
    //var jsonObject = JSON.parse(this.state.actors);
    //conditionalBody = dataDump;
    //{conditionalBody}

    if(!DataisLoaded){
      return (
        <div className="App">
          <header className="App-header">
          
            <img src={load} className="App-logo" alt="load" />
      
          </header>
        </div>);
    } else {
      //conditionalBody = ;
    }
    //const actorById = String(this.state.actors[1].actor_id + " " +this.state.actors[1].first_name + " " + this.state.actors[1].last_name);
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Welcome to <code>The Actor Database Project</code>, find a list of recorded actors below,
          <br />
          or come back soon for the upcoming random film picker.
          <br /><br />
          Also, checkout the creator at:
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

export default App;

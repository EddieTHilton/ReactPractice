import load from './load.gif';


import './App.css';
import React from 'react';
//import { usePromiseTracker } from "react-promise-tracker";



class DummyPage extends React.Component {

    render () {

    return (
        <div className="App">
          <header className="App-header">
            
            <p>
              Welcome to <code>Dummy Page</code>
              <br />
              Come back soon for the upcoming random film picker.
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
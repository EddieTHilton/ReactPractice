import load from './load.gif';


import './App.css';
import React from 'react';
//import { usePromiseTracker } from "react-promise-tracker";



class DummyPage extends React.Component {


  state = {
    films: []
  };

  async componentDidMount(){
    fetch(
      "https://springtest-1655723125490.azurewebsites.net/Home/All_Films")
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            films: json,
            DataisLoaded: true
          });
        })


  }


    

    render () {

    const dataDump = JSON.stringify(this.state.films);
    const { DataisLoaded, films } = this.state;

    if(!DataisLoaded){
      return (
        <div className="DummyPage">
          <header className="App-header">
          
          <img src={load} className="App-logo" alt="load" />
      
          </header>
        </div>);
    } else {

    }

    return (
        <div className="DummyPage">
          <header className="App-header">
            
            <p>
              Welcome to <code>Dummy Page</code>
              <br />
              Come back soon for the upcoming random film picker.
              <br /><br />
              Also, checkout the creator at:
              </p>
            <p>

            <br />
              List of requested film(s):
              <br /><br />
              {films.map((film) => ( 
                    <ol key = { film.film_id } >
                        ID No: { film.film_id }, Title: { film.title }
                        , Description { film.description } 
                        </ol>
              ))}
    
              <br /><br />
            </p>
            
          </header>
        </div>
      );
    
    } 
}

export default DummyPage;
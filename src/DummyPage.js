import load from './load.gif';


import './App.css';
import React from 'react';
//import { usePromiseTracker } from "react-promise-tracker";



class DummyPage extends React.Component {


  state = {
    films: [],
    box: {width: '600px', height: '300px', border: '1px solid grey'}
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
        <div className="App">
          <header className="App-header">
            
            <p>
              Welcome to <code>Movie List</code>
              <br />
              Come back soon for the upcoming random film picker.
              <br /><br />
              Also, checkout the creator at:
            </p>
          </header>
          
          <p>
              List of requested film(s):
              <br /><br />
              {films.map((film) => ( 
                <div style={this.state.box}>
                    <ol key = { film.film_id } >
                        <br/><strong>{film.title}</strong> ({film.release_year}),<br/><strong>Description:</strong> {film.description}.<br/><strong>Movie ID:</strong> {film.film_id}
                        </ol>
                </div>

              ))}
    
              <br /><br />
            </p>
        </div>
      );
    
    } 
}

export default DummyPage;

import load from './load.gif';


import './App.css';
import React from 'react';
//import { usePromiseTracker } from "react-promise-tracker";



class RandomFilm extends React.Component {

  state = {
    films: [],
    box: {width: '600px', height: '300px', border: '1px solid grey'},
    randomID: 0
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


  RandomiseID() {
    var rand = Math.floor(Math.random() * 200)
    this.setState({randomID: rand});
    return;
  }
 
    

  render () {
    
    const dataDump = JSON.stringify(this.state.films);

    //this.RandomiseID();

    const { DataisLoaded, films } = this.state;

    //let {selectedFilm} = films.find(film => film.film_id == 8);

    if(!DataisLoaded){
      return (
        <div className="DummyPage">
          <header className="App-header">
            <img src={load} className="App-logo" alt="load" />
          </header>
        </div>
      );
    } else {
      //empty
    }
    
    return (

      <div className="App">
        <header className="App-header">
          <p>
          Welcome to <code>Movie List</code>
          <br />
          Come back soon for the upcoming random film picker.
          <br />
          <br />
          Also, checkout the creator at:
          </p>
        </header>
          
        <p>
          <br />
          <button onClick={this.RandomiseID()} >
          Randomise Film
          </button>
          <br />
          <br />
          Random film ({ films[this.state.randomID].film_id }):
          <br />
          <br />
          <div style={this.state.box}>
            <ol key = { films[this.state.randomID].film_id } >
              <br/><strong> { films[this.state.randomID].title }</strong> {films[this.state.randomID].release_year},<br/><strong>Description:</strong> { films[this.state.randomID].description }.<br/><strong>Movie ID:</strong> { films[this.state.randomID].film_id }
            </ol>
          </div>
          <br />
          <br />
        </p>
      </div>
    );
    
  } 

}



export default RandomFilm;

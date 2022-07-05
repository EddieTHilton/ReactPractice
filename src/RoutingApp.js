import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

//import './navBar.css'
import './index.css'

import ActorList from './components/actorlist';
import FilmList from './components/filmlist';

export default function App() {
  return (
	<Router>
	  <div className="App">
      <div id="index">
		<Link id="actorSearch" to='/'>Actor List</Link>
        <Link id="filmSearch"to='/movie'>Film List</Link>
        </div>
		<Routes>
		  <Route exact path='/' element={< ActorSearch />}></Route>
          <Route path='/movie' element={< FilmSearch />}></Route>
        </Routes>
        </div>
    </Router>
  
  );
}
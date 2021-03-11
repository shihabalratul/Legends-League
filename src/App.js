import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import NotFound from './Components/NotFound/NotFound';

function App() {

  return (

    <div>
      <Router>
        <Switch>
          <Route path='/details/:id'>
            <Details></Details>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>


      </Router >
    </div >

  );
}

export default App;

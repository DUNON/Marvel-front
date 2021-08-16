import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Header from './Components/Header';
import Comics from './Pages/Comics';
import Characters from './Pages/Characters';
import Character from './Pages/Character';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/comics">
        <Comics/>
        </Route>
        <Route path="/comics/:id">
        <Character/>
        </Route>
        <Route path="/characters">
        <Characters/>
        </Route>
        <Route path="/">
        <Home/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

import CardDatabase from './components/CardDatabase';
import {Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import YourCollection from './components/YourCollection';

const App = () => {
  return (
    <div className="App">
      
      <NavBar/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/cards' component={CardDatabase}></Route>
      <Route exact path='/yourCards' component={YourCollection}></Route>
    </div>
  );
}

export default App;

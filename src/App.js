import CardDatabase from './components/CardDatabase';
import {Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      {/* The commented text at the bottom was originally here */}
      <NavBar/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/cards' component={CardDatabase}></Route>
      <Route exact path='/yourCards'></Route>
    </div>
  );
}

export default App;


/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
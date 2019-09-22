import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom';

const Hatspage = ()=> (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/hats' component={Hatspage}/>
      </Switch>
    </div>
  );
}

export default App;

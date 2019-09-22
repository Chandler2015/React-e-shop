import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom';
import Shoppage from './pages/shop/shop.component';
import Header from './components/header/header.component';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shoppage}/>
      </Switch>
    </div>
  );
}

export default App;

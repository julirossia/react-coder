import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';

export default function App() {
  return (
    <BrowserRouter>
    
      <Navbar/>
      <Switch>
        <Route exact path='/'>
   <Home/>
        </Route>
        <Route exact path='/description/:id'>
   <ItemDetail/>
        </Route>
      <Route exact path='/cart'><Cart/></Route>
   
      </Switch>
    </BrowserRouter>
  );
}

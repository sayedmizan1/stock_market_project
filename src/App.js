import logo from './logo.svg';
import Navbar from './component/Navbar';
import { useState } from 'react';
// import './App.css';

import News from './component/News';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './component/Dashboard';
import Subscribe from './component/Subscribe';
function App() {
  const [mode,setmode]= useState('dark')
  // const togglemode=()=>{
  //   if(mode=='dark'){
  //     setmode('light')
  //     document.body.style.backgroundColor='white'
  
  //   }
  //   else{
  //     setmode('dark')
  //     document.body.style.backgroundColor='dark'
    
  //   }
  // }
  return (
    <Router>
    <div className="App">
 <Navbar   home="my home"/>
 <Switch> 
 <Route exact path="/">
          <Home key="business" category='business'/>
          </Route>
 <Route exact path="/business">
          <News key="business" category='business'/>
          </Route>
 <Route exact path="/dashboard">
      <Dashboard/>
          </Route>
 <Route exact path="/subscribe">
      <Subscribe/>
          </Route>
 </Switch>
    </div>
    </Router>
  );
}

export default App;

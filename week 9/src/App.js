import './App.css'
import React from "react";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import {Switch,
  Route,
  Link
} from "react-router-dom";



function App() {


  return (

    <div class="App">
     <nav>
       <Link to="/about">About</Link> <br />
       <Link to="/contact">Contact</Link> <br />
       <Link to="/">Home</Link>
     </nav>
   
     <h1>Hello World</h1>

     <Switch>
     <Route path="/about">
       <About/>
     </Route>
     <Route path="/contact">
       <Contact/>
     </Route>
     <Route path="/">
       <Home/>
     </Route>
     </Switch>
     
    </div>
  )
}


export default App

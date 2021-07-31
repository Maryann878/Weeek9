import './App.css'
import React from "react";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Forms from './Forms'
import RouteParam from './pages/RouteParam';

import {Switch,
  Route,Link,Router,
  NavLink
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

     {/* <Switch>
     <Route path="/about">
       <About/>
     </Route>
     <Route path="/contact">
       <Contact/>
     </Route>
     <Route path="/">
       <Home/>
     </Route>
     </Switch> */}

     
<div className = "App">
  <NavLink to= "/RouteParam">Product</NavLink>
  <Route path= "/RouteParam/:id">
    <RouteParam/>
  </Route>
</div>
    </div>
  )
}




export default App
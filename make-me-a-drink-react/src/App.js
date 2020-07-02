import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Logo from './logo';
import Navbar from "./Components/Navbar";
import Drink from "./Pages/Drink";
import Saved from "./Pages/Saved";
import Botbar from "./Components/Botbar"
import './App.css';

export default function App() {

   return (
      <Router>
         <div className="parent">
            <Navbar />
            <Switch>
               <Route exact path={["/", "/drink"]}>
                  <Drink />
               </Route>
               <Route exact path={["/saved"]}>
                  <Saved />
               </Route>
            </Switch>
            <Botbar/>
         </div>
      </Router>
   );
}

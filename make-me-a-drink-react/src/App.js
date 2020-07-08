import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Logo from './logo';
import Navbar from "./Components/Navbar";
import Drink from "./Pages/Drink";
import Saved from "./Pages/Saved";
import Botbar from "./Components/Botbar"
import './App.css';

export default function App() {

   let [background, setBackground] = useState(localStorage.getItem('background'))

   function changeBackground () {
      console.log(background)

   }
   changeBackground()
   // const backgroundChange = {
   //    minus: "./img/ingoodspirits-8.jpg"
   //    plus: "./img/ingoodspirits-10.jpg"
   // }


   // add a function/props? that is expecting something from the Navbar
   // See class example or books homework(?) for example

   return (
      <Router>
         <div className="parent">
            <div className="App">
               <header className="App-header">
                  
                  <Navbar />
                  <Switch>
                     <Route exact path={["/", "/drink"]}>
                        <Drink />
                     </Route>
                     <Route exact path={["/saved"]}>
                        <Saved />
                     </Route>
                  </Switch>
                  <Botbar />
               </header>
            </div>
         </div>
      </Router>
   );
}

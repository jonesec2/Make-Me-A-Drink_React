import React, { useState, ReactDOM, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Logo from './logo';
import Navbar from "./Components/Navbar";
import Drink from "./Pages/Drink";
import Saved from "./Pages/Saved";
import Botbar from "./Components/Botbar"
import './App.css';

export default function App() {

   let number = localStorage.getItem('count')
   console.log(number)
   let [image, setImage] = useState("./img/ingoodspirits-"+number+".jpg")
   let image2 = "./img/ingoodspirits-8.jpg"

   useEffect(() => {
      console.log(image)
   })

   function onButtonClick() {
      console.log("i was clicked")
      if (image === "./img/ingoodspirits-8.jpg") {
         console.log("switching to noir")
         setImage("./img/ingoodspirits-10.jpg")

      } else if ("./img/ingoodspirits-10.jpg") {
         setImage("./img/ingoodspirits-8.jpg")
         console.log("switching to classic")
      }
      else {
         return
      }
   }


   // add a function/props? that is expecting something from the Navbar
   // See class example or books homework(?) for example

   return (
      <Router>
         <div className="parent" style={{backgroundImage: `url(${image})`}}>
            <div className="App">
               <header className="App-header">
                  <Navbar 
                     onButtonClick={onButtonClick}
                  />
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

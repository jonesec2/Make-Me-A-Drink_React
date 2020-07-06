// import {useState, useEffect} from "inferno";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./css/style.css";


export default function Navbar() {

   //write onClick event for the "Dark Mode" button


   let [count, setCount] = useState()
   let [background, setBackground] = useState()

   

   function counter() {
      if (count <= 1) {
         setCount(count += 1)
      } else {
         count = 1
      }
      determineBackground()
   }

   function determineBackground() {
      
      if (count % 2 === 0) {
         console.log('yes')
         setBackground("noir")
         console.log(background);
      } else {
         console.log('no')
         setBackground('classic')
         console.log(background)
      }
   }

   function buttonToggle(event) {
      // event.preventDefault();
      console.log("Test")
      console.log(event.target.dataset)
      console.log(event.target.getAttribute('data-on'))

   }

   return (
      <nav className="nav test">
         <Link id="id" className="title" to="/drink"><h4 className="lobster">Home</h4></Link>
         <div className="list-div">
            <ul className="nav-list">
               <li className="nav-item">
                  <Link id="id2" className="vollkorn" to="/saved"><a>Saved Drinks</a></Link>
               </li>
               <li className="nav-item">
                  <label class="switch switch-left-right">
                     <input class="switch-input" type="checkbox" />
                     <span onClick={counter} class="switch-label" data-on="Noir" data-off="Classic"></span>
                     <span class="switch-handle"></span>
                  </label>
               </li>
               <form class="form">
                  <input className="vollkorn smooth search" type="search" placeholder="Drink Search"
                     aria-label="Mix Drink Search" />
                  <button id="test" className="vollkorn search-btn smooth" type="submit">Search</button>
               </form>
            </ul>
         </div>
      </nav>
   )

}
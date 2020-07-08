// import {useState, useEffect} from "inferno";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./css/style.css";


export default function Navbar() {

   //write onClick event for the "Dark Mode" button


   let [count, setCount] = useState(1)
   let [background, setBackground] = useState('noir')

   

   function counter() {
      console.log(count)
      if (count === 1) {
         setCount(2)
         console.log("count noir")
      } else {
         setCount(1)
         console.log("count classic")
      } 
      determineBackground()
   }

   function determineBackground() {
      
      if (count % 2 === 0) {
         console.log(2)
         setBackground("noir")
         console.log(background)
      } else {
         console.log(1)
         setBackground('classic')
         console.log(background)
      }
      setStorage()
   }

   function setStorage() {
      localStorage.setItem('count', count)
      localStorage.setItem('background', background)
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
                     <button onClick={counter} class="switch-label" data-on="Noir" data-off="Classic"></button>
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
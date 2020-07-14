// import {useState, useEffect} from "inferno";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./css/style.css";


export default function Navbar() {
  
   //////////////////////////////
   // 1. Write a function that checks the local storage on a users first visit
   // and if none exists set default of "classic". Else {rest of logic}
   //
   // 2.Add function that if Noir is chosen, page will load with attr(off) selected
   /////////////////////////////
   
   let [count, setCount] = useState(1)
   let [background, setBackground] = useState('noir')

   useEffect(() => {
      let test = localStorage.getItem('count')
      console.log(test)
      if (test === null) {
         localStorage.setItem('count', '2')
         localStorage.setItem('background', 'classic')
      } else {
         return
      }      
   }, []);

   
   // sets a counter for the background slider
   function counter() {
      console.log(count)
      if (count === 1) {
         setCount(2)
         setBackground('classic')
         
      } else {
         setCount(1)
         setBackground('noir')
      } 
      setStorage()
   }

   // Sets the count / background to storage to save the preference
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
                     <input onClick={counter} class="switch-input" type="checkbox" />
                     <span  class="switch-label" data-on="Noir" data-off="Classic"></span>
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
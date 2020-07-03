// import {useState, useEffect} from "inferno";
import React from 'react';
import { Link } from "react-router-dom";
import "./css/style.css";


export default function Navbar() {

   //write onClick event for the "Dark Mode" button

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
                     <span class="switch-label" data-on="Night" data-off="Day"></span>
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
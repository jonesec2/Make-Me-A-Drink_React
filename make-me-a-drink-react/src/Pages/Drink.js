// import { useEffect, useRef, useState } from 'inferno';
import React from 'react';
import BackSplash from '../Components/Backsplash';
import SearchDrink from "../Components/SearchDrink"
import Botbar from "../Components/Botbar";
import "./css/style.css"

export default function Drink() {

   return (
      <div className="App">
         <header className="App-header">
            <BackSplash>
               <SearchDrink/>
            </BackSplash>
         </header>
      </div>
   )
}
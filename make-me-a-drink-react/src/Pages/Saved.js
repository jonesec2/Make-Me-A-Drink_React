import React from 'react';
// import BackSplash from '../Components/Backsplash';
import SavedDrinks from "../Components/SavedDrinks";
import "./css/style.css"

export default function Saved() {

   return (
      <div className="page">
      <header className="drinkHeader">
         <SavedDrinks/>
      </header>
   </div>
   )
}
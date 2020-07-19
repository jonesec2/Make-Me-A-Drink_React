
import React, { useState, useEffect } from 'react';
import "./css/style.css"

export default function BackSplash() {

   let [divs, setDivs] = useState([])
   // console.log(divs)

   function testDiv() {
      // console.log("test")
      setDivs(divs += "<h1>Testing this bad boy out, yah know what I mean?</h1>")
      // console.log(divs)
   }
   // console.log(divs)

   return (
      <div className="container">
         <div className="transparent">
            <button className="testButton" type="text" onClick={testDiv}>Test</button>
            {divs}
         </div>
      </div>
   )
}
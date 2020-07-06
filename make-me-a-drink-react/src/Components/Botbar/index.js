import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import "./css/style.css"

export default function Botbar() {



   const scrollTop = event => {
      event.preventDefault();
      window.scrollTo({
         top:0,
         left:0,
         behavior: 'smooth'
      })
   }

   return (
      <div className="botBar">
         <div className="popUp" onClick={scrollTop}>
            <p className="scroller">^</p>
         </div>

      </div>
   )
}
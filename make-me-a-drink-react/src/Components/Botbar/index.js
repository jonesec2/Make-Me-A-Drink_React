import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import "./css/style.css"

export default function Botbar() {



   const scrollTop = event => {
      event.preventDefault();
      window.scrollTo(0, 0)
   }

   return (
      <div className="botBar">
         <div className="popUp" onClick={scrollTop}>
            <p className="scroller">^</p>
         </div>

      </div>
   )
}
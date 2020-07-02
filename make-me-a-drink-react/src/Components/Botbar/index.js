import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "./css/style.css"

export default function Botbar() {

   const [visible, setVisible] = useState();

   // const HoverText = styled.h1 `
   //    color: #000000;
   //    :hover {
   //       color: #ffffff;
   //       display: block;
   //    }
   // `

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
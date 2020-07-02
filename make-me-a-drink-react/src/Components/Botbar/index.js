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

   return (
      <div className="botBar">
         <div className="popUp">
            <p className="scroller">^</p>
         </div>

      </div>
   )
}
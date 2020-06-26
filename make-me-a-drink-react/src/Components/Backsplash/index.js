
import React, { useState, useEffect } from 'react';
import "./css/style.css"

export default function BackSplash() {

   let [divs, setDivs] = useState([])
   console.log(divs)

   function testDiv() {
      console.log("test")
      setDivs(divs += "<h1>Testing this bad boy out, yah know what I mean?</h1>")
      console.log(divs)
   }
   console.log(divs)

   return (
      <div className="container">
         <div className="transparent">
            <button className="testButton" type="text" onClick={testDiv}>Test</button>
            {divs}
         </div>
      </div>
   )
}
// const div = []

// function addDiv(instance) {
//    const test = <h1>Test</h1>
//    instance.setState({ data: div })

//    console.log(this.data.state)
//    console.log("yo")
// }

// class BackSplash extends Component {

//    render() {
//       return (
//          <div className="transparent">
//             {/* <button className="testButton" type="text" onClick={linkEvent(this, addDiv)}>Test</button> */}
//             {div}
//          </div>
//       )
//    }
// }


// render() {
//    return (
//       <div className="transparent">
//          <button className="testButton" onClick={addDiv}>Test</button>
//          {this.state.divs.map(div => (
//             <div>Test</div>
//          ))}
//       </div>
//    )
// }
// }
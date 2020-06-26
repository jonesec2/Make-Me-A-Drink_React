// import { linkEvent, instance, Component } from "inferno";
import React, {Component} from 'react';
import "./css/style.css"

const div = []

function addDiv(instance) {
   const test = <h1>Test</h1>
   instance.setState({ data: div })
   
   console.log(this.data.state)
   console.log("yo")
}

class BackSplash extends Component {

   render() {
      return (
         <div className="transparent">
            {/* <button className="testButton" type="text" onClick={linkEvent(this, addDiv)}>Test</button> */}
            {div}
         </div>
      )
   }
}


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

export default BackSplash;
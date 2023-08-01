// import React from "react";
// class Contador extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             counter:0
//         }
//     }


// aumentar=()=>{
//     this.setState({counter: this.state.counter + 1})
//  }
 
// render() {
//     return(
//     <div>
//         <button onCLick = {this.aumentar} > aumentar</button>

//     </div>
//         )}


// }


import { useState } from "react"


export default function ContadorFuncional() {
    const [counter, setCounter] = useState(0)
    const aumentar = () => {
        setCounter(counter + 1)
    }

 return(
    <div>
        <h1> contador functional </h1>
        <button onClick = {aumentar}> aumentar </button>
    </div>>
    
)}

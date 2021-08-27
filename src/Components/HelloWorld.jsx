import React, { useState } from 'react';

import "../Styles/HelloWorld.css";


const HelloWorld = () => {
    const [message, setMessage] = useState("");

    function printHelloWorld(){
        console.log("Hello World!!!")
        setMessage("Hello World!!!");
    }

    return ( 
        <div className="HelloWorld">
            <div className="HelloWorld_Code">
                <span style={{color: "#6272A4"}}>// Write Hello World:</span> <br />
                <span style={{color: "#FF79C6"}}>function</span> 
                    <span style={{color: "#50FA7B"}}> printHelloWorld</span>() {"{"} <br />
                <span style={{color: "#BD93F9"}}>&emsp;console</span>.log(
                    <span style={{color: "#F1FA8C"}}>"Hello World!!!"</span>); <br />
                {"}"}
            </div> 
            <button onClick={printHelloWorld}>printHelloWorld();</button>
            <h1>
                {message}
            </h1>
        </div>
     );
}
 
export default HelloWorld;
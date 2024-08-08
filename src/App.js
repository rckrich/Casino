
import { useState, useEffect } from "react";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { UnityHandler } from "./components/UnityHandler";

function App() {

  const [identifier, setIdentifier] = useState(0);

  return (
    <div style={{display: "flex", flexDirection: "column", padding: "10px"}}> 
      
      <button onClick={() => setIdentifier(1)}> Egypt</button>
      <button onClick={() => setIdentifier(2)}> Dragones</button>
      <UnityHandler identifier={identifier}>
      </UnityHandler>


  </div>
  )
  
}

export default App;

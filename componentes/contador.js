import React, { useState } from "react";

export default function Contador(){
  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    setNumero(numero + 1);
  };

  const disminuir = () => {
    setNumero(numero - 1);
  };
   return(
    <div>
      {/* <h1>Contador</h1> */}
      { <p> {numero} </p> }
      <button className="button" onClick={aumentar}>Dale clic</button>
      {/* <button className="button" onClick={disminuir}>Disminuir</button> */}
    </div>
   );
  }

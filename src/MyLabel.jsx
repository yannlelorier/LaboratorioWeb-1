import React from "react";

function MyLabel(props) {
  return <div hidden={props.hidden}>Valor en MyLabel {props.nuevoVal}</div>;
}

function Algo() {
  return "hola";
}

export { MyLabel, Algo };

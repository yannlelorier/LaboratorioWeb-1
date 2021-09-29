import "./styles.css";
import { useState } from "react";
import useMyFunction from "./useMyFunction";
import { Button } from "@material-ui/core";
import { MyLabel, Algo } from "./MyLabel";
import { Counter } from "./components/Counter";

export default function App() {
  const { value, visible, sumValue, restValue } = useMyFunction({
    value: 0
  });

  return (
    <div className="App">
      <label>Valor: {value}</label>
      <br />
      <div>
        <Button onClick={(e) => sumValue(value)}>+</Button>
      </div>
      <Button onClick={(e) => restValue(value)}>-</Button>
      <MyLabel hidden={visible} nuevoVal={value} />
      <Algo />
      <Counter />
    </div>
  );
}

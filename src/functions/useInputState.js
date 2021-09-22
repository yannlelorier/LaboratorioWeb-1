import { useState } from "react";

export default function useInputState() {
  const [value, setValue] = useState("");

  return {
    //lo que se regresa es value solamente
    value,
    //aqui definimos las funciones donde se llaman los hooks (solo si es necesario)
    onChange: (event) => {
      setValue(event.target.value);
    },
    reset: () => setValue(""),
  };
}

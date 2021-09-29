import { useState } from "react";

export default function useMyFunction(e) {
  const [value, setValue] = useState(e.value);
  const [visible, setVisible] = useState(true);

  return {
    value,
    visible,
    sumValue: () => {
      setValue(value + 1);
      setVisible(false);
    },
    restValue: () => {
      setValue(value - 1);
      setVisible(true);
    }
  };
}

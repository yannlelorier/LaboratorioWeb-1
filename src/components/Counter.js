import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment, incrementAsync } from "../store/counterSlice";
import { useState } from "react";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  return (
    <div>
      Counter = {count}
      <input
        value={incrementAmount}
        onChange={(e) => {
          setIncrementAmount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        {"+"}
      </button>
      <button
        onClick={() => {
          dispatch(incrementAsync(Number(incrementAmount)));
        }}
      >
        +Async
      </button>
    </div>
  );
}

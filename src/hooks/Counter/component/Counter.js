import React, { useState } from "react";
import { INCREMENT, DECREMENT, RESET } from "../store/descriptors"
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.count);
  const [text, setText] = useState(0);

  const dispatch = useDispatch();
  let increment = () => {
    dispatch({ type: INCREMENT, payload: "hello" });
  };
  let decrement = () => {
    dispatch({ type: DECREMENT });
  };
  const changeText = (e) => {
    console.log(e.target.value);
    let val = e.target.value;
    setText(val);
  };

  const reset = () => {
    dispatch({ type: RESET });
  };

  return (
    <div>
      <h1>Counter</h1>
      <div>{counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <div>
        <button onClick={() => dispatch({ type: "--" })}>add</button>
        <input value={text} type="number" onChange={changeText} />
      </div>
    </div>
  );
};
export default Counter;

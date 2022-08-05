import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store"
const Counter = () => {
    const counter = useSelector((state) => state.counter.count);

    const [text, setText] = useState(0);

    const dispatch = useDispatch();
    let increment = () => {
        dispatch(counterActions.increment())
    };
    let decrement = () => {
        dispatch(counterActions.decrement())
    };
    const changeText = (e) => {
        console.log(e.target.value);
        let val = e.target.value;
        setText(val);
    };
    const increase = () => {
        dispatch(counterActions.increase(Number(text)))
        setText(0)
    }
    const reset = () => {
        dispatch(counterActions.reset())
    };

    return (
        <div>
            <h1>Counter</h1>
            <div>{counter}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <input value={text} type="number" onChange={changeText} />
            <button onClick={increase}>add</button>
            <button onClick={() => dispatch(counterActions.reset())}>Reset</button>
        </div>
    );
};
export default Counter;

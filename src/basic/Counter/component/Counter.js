import React from "react";
import { connect } from "react-redux";
 function Counter(props) {
  console.log(props);
  return(
  <div>
    count : {props.count}
    <button onClick={props.increment}> +</button>
    <button onClick={props.decrement}>-</button>
    <button onClick={props.reset}>reset</button>
  </div>)
}

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: "increment" });
    },
    decrement: () => {
      dispatch({ type: "decrement" });
    },
    reset: () => {
      dispatch({
        type: "reset",
      });
    },
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

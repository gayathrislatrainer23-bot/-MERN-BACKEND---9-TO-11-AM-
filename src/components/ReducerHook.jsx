import React, { useReducer } from "react";

const initialState = { count: 0 };

const  reducer=(state, action) => {
  console.log(action)
switch (action.type) {
  case "increment":
    return { count: state.count + 1 };
  case "decrement":
    return { count: state.count - 1 };
  case "reset":
    return initialState;
  default:
    return state;
}
}


function ReducerHook() {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <h1>reducer</h1>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default ReducerHook;


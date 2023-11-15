import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    //handling dispatch action and updating state here
    case "INCREMENT":
      return {
        counterState: state.counterState + 1,
        showTextState: state.showTextState,
      };
    case "SHOWTEXT":
      return {
        counterState: state.counterState,
        showTextState: !state.showTextState,
      };
    default:
      return state;
  }
};
const UseReducerHook = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);

  // useReducer syntax
  const [state, dispatch] = useReducer(reducer, {
    counterState: 0,
    showTextState: false,
  });

  return (
    <div style={{ textAlign: "center", alignItems: "center" }}>
      {/* <h1>{state.count}</h1> */}
      <h1>{state.counterState}</h1>
      <button
        onClick={() => {
          // if you have may states and couple of action that trigger on same action
          // you should use useReducer hook
          // so you dont have many state, only one state will be maintain
          //   setCount(count + 1);
          //   setShowText(!showText);

          // dispatch reducer action here
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "SHOWTEXT" });
        }}
      >
        Increment
      </button>
      {/* <h2>{state.showText && "Showing Text"}</h2> */}
      <h2>{state.showTextState && "Showing Text"}</h2>
    </div>
  );
};

export default UseReducerHook;

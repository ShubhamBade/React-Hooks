import React, { useRef } from "react";
import ChildComponent from "./ChildComponent";

//use to called child component function or updation
//we dont want to pass state from parent component to child still want to access child function
const UseImperativeHook = () => {
  const ref = useRef(null);
  const onClick = () => {
    ref.current.showTextFunc();
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseImperativeHook</h1>
      <button onClick={onClick}>Button from parent</button>
      {/* we cant ref a functional component, so need to wrap child component with forward ref */}
      <ChildComponent ref={ref} />
    </div>
  );
};

export default UseImperativeHook;

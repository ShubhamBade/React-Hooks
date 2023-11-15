import React, { useState } from "react";

// useState hook - change in value/state tell react to render

const UseStateHook = () => {
    //normal way
    let counter=0;
    const incrementCounter=()=>{
        counter=counter+1;
        //counter value increase but not showing on ui, because ui not render by react - need to tell to react
        console.log("Counter Value :",counter) //this value is changing
    }

    //lets fix this by using useState hook
    const [count,setCount]=useState(0)

    const incrementCounterWithHook=()=>{
        //when state changes, react re-render ui with updated value
        //other variable values get re-initialize with default values
        setCount(count+1)
    }

  return (
    <div style={{ textAlign: "center", alignItems: "center" }}>
      <h1>without Hook: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <h1>With Hook: {count}</h1>
      <button onClick={incrementCounterWithHook}>Increment With Hook</button>
    </div>
  );
};

export default UseStateHook;

import React, { useRef } from "react";

const UseRefHook = () => {
  //use to access and manipulate dom elements
  const nameRef = useRef(null);
  const onClick=()=>{
    nameRef.current.focus();

    //clear existing value
    nameRef.current.value=""
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseRefHook</h1>
      {/* autofcous on input using ref - when button clicked*/}
      <input placeholder="Enter your name" ref={nameRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default UseRefHook;

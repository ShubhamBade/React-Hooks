import React, { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffectHook = () => {

  const inputRef=useRef(null)

  //useLayoutEffect called before useEffect calls
  //this hook call before ui render
  // this also take [] array
  // this is useful when you want to render somthing before ui render
  useLayoutEffect(() => {
    console.log("useLayouteffect called");
    inputRef.current.value="value Before UI Render"
  });

  useEffect(() => {
    // called after ui render
    console.log("useeffect called");
    inputRef.current.value=""
  });
  return <div>
    <input ref={inputRef} disabled={true} style={{fontSize:25}}/>
  </div>;
};

export default UseLayoutEffectHook;

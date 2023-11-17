import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

const UseCallbackHook = () => {
  // suppose you have a function that pass to child component
  // that function get called every re-render of parent component- need to avoid, useCallback memoize the whole call back function
  // we can pass parameter as well, that we cant do with useMemo hook

  const [toggle,setToggle]=useState(false);
  const [data,setData]=useState(" This is useCallback default data")

  const showLog=()=>{
    return "Called when return same data";
  }

  const showLogUseCallback=useCallback(()=>{
    return data;
  },[data])
  
  return (
    <div>
      <button onClick={()=>{setToggle(!toggle)}}>Toogle State</button>
      <ChildComponent showLog={showLog} showLogUseCallback={showLogUseCallback}/>
    </div>
  )
}

export default UseCallbackHook

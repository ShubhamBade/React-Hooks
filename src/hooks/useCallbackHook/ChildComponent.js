import React, { useEffect } from 'react'

const ChildComponent = ({showLog,showLogUseCallback}) => {
    useEffect(()=>{
        console.log("ShowLog function called")
    },[showLog])
    useEffect(()=>{
        console.log("showLogUseCallback called when data changes")
    },[showLogUseCallback])
  return (
    <div>
      {showLog()}
      <br></br>
      {showLogUseCallback()}
    </div>
  )
}

export default ChildComponent

import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const UseMemoHook = () => {
  //use for computation and complex calculation-like algorithm
  // it memosises the value between re-renders, it also take []

  const [data, setData] = useState(null);
  const [toggle,setToggle]=useState(false)

  useEffect(() => {
    axios
      .get("https://dummyjson.com/comments")
      .then((response) => {
        setData(response.data.comments);
        console.log("API Data Fetched");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const findLongestComment=(data)=>{
    if(data==null) return console.log("findLongestComment called when data is null");
    let longestComment="";
    for(let key of data){
        if(longestComment.length<data[key.id]?.body.length){
            longestComment=data[key.id].body
        }
    }
    console.log("findLongestComment called when data present")
    return longestComment;
  }

  // recompute above function when data changes
  // this called initial render and when state changes like useEffect, useFul when function calls from ui
  const getLongestComment=useMemo(()=>findLongestComment(data),[data])

  return <div>
    {/* function get called on every re-render, we need to avoid this using useMemo
        we just want this function get excute when actual data get changed
    */}
    <h1>{data?getLongestComment:"Data not loaded yet"}</h1>
    <button onClick={()=>{setToggle(!toggle)}}>Lets Toggle</button>
  </div>;
};

export default UseMemoHook;

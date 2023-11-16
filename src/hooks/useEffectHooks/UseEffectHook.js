import axios from "axios";
import React, { useEffect, useState } from "react";

//useEffect hook call after ui render by react
//useEffect called once page re renders
const UseEffectHook = () => {
  const [data, setData] = useState("React Hooks"); //default value
  useEffect(() => {
    axios
      .get("https://dummyjson.com/comments")
      .then((response) => {
        setData(response.data.comments[0].body);
        console.log("API Called");
      })
      .catch((error) => {
        console.log(error);
      });
    //if you do not pass dependancy array useEffect exceute each and every time when state changes
    // we can pass state in dependancy array so that useEffect excutes when state changes
    // [] this excute this hook only first time
  }, []);
  return (
    <div>
      {/* page re-render to show changed data */}
      <h1>{data}</h1>
    </div>
  );
};

export default UseEffectHook;

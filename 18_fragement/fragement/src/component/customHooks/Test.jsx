import React, { useEffect, useState } from "react";
import customHook from "./customHook";

function Test() {
  //useEffect allow us to perform side Effect in functional component.

  // useEffect dependenciese list controls the useEffect rendering.
  const [count, setCount] = useState(0);

 
  const handleOnSubmit = () => {
    setCount(count + 1);
  };

  //custom Hook
  customHook(count);

 

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleOnSubmit}>click</button>
    </div>
  );
}

export default Test;

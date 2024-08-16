import React, { useEffect, useState } from "react";
import customHook from "./customHook";

function UseEffect() {
  //useEffect allow us to perform side Effect in functional component.

  // useEffect dependenciese list controls the useEffect rendering.
  const [count, setCount] = useState(0);

 
  const handleOnSubmit = () => {
    setCount(count + 1);
  };

  //customhook
  customHook(count);

  return (
    <div className="d-flex  align-items-center flex-column ">
      <h1>{count}</h1>
      <button onClick={handleOnSubmit}>click</button>
    </div>
  );
}

export default UseEffect;

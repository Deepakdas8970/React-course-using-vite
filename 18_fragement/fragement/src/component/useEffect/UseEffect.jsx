import React, { useEffect, useState } from "react";

function UseEffect() {
  //useEffect allow us to perform side Effect in functional component.

  // useEffect dependenciese list controls the useEffect rendering.
  const [count, setCount] = useState(0);

 
  const handleOnSubmit = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    (count==0) ? document.title=`chat`: document.title=`chat(${count})`;
   
  },[count]); //[] means the rendering of component and [count] means rendering the component on the change of count

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleOnSubmit}>click</button>
    </div>
  );
}

export default UseEffect;

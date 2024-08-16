import React, { useEffect } from 'react'

const customHook = (count) => {
  useEffect(() => {
    (count==0) ? document.title=`chat`: document.title=`chat(${count})`;
   
  },[count]); //[] means the rendering of component and [count] means rendering the component on the change of count
}

export default customHook
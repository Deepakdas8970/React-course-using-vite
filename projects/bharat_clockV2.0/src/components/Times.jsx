import { useEffect, useState } from "react";

function Times(){
  let time =new Date();
  const [Time,SetTime]=useState(time);
  useEffect(()=>{
    setInterval(()=>{SetTime(new Date())},1000)
  },[])
  return <>
  
  <div>Today's Date is : <span>{Time.toLocaleString()}</span></div> 
  </>
  
}
export default Times;
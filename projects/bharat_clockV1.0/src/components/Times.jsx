function Times(){
  let time =new Date();
  return <>
  
  <div>Today's Date is : <span>{time.toLocaleString()}</span></div> 
  </>
  
}
export default Times;
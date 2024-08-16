import Component_1 from "./Component_1";
import DynamicComponent from "./DynamicComponent";

// react component creation 
function App(){
  return <div>
    <h1>
  Hello world welcome to react full course programe
  </h1>
  {/* component call  1st way */}
  <Component_1></Component_1>

   {/* component call  2st way  & standard way*/}
  <Component_1/>
  <DynamicComponent/>

  </div>  
}
export default App;

// we use export to reuse again in diffent file
// default k liye {} ka use nahi karte h 
// export ke lite {} ka use karte h

import React from "react";
import "./App.css";
//import UseEffect from "./component/useEffect/UseEffect";
import UseEffectAPI from "./component/useEffect/UseEffectAPI";
import UseRef from "./component/useRef/UseRef";
import UseReducer from "./component/useReducer/UseReducer";
import ComA from "./component/ContextAPI/ComA";
import Test from "./component/customHooks/Test";
import UseEffect from "./component/customHooks/UseEffect";
//React fragement allow us to wrap multiple element into a single element without adding extra dom node.

function App() {
  return (
    //standerd way to create fragement.
    //<></> is the shorthand way...
    // <React.Fragment>
    //  //   <ul class="list-group">
    // //     <li class="list-group-item active" aria-current="true">
    // //       Fruits Items
    // //     </li>
    // //     <li class="list-group-item">A second item</li>
    // //     <li class="list-group-item">A third item</li>
    // //     <li class="list-group-item">A fourth item</li>
    // //     <li class="list-group-item">And a fifth one</li>
    // //   </ul> 

    //  </React.Fragment>


    // useEffect in React

    <>

    {/* <UseEffect/> */}
    {/* <UseEffectAPI/> */}
    {/* <UseRef/> */}
    {/* <UseReducer/> */}
    {/* <ComA></ComA> */}
    <Test/>

    </>
  );
}

export default App;

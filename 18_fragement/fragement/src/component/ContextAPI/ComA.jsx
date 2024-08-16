import React, { createContext } from "react";
import ComB from "./ComB";
const Data=createContext();

const ComA = () => {

  return(
    <Data.Provider value={"C"}>
    <ComB/>
  
    </Data.Provider>

  );
};

export default ComA;
export {Data};


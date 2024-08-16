import React, { useContext } from "react";
import {Data} from "./ComA";

const ComC = () => {
  const name=useContext(Data);
  return <>
  <h1>This is Com{name}</h1>
  </>;
};

export default ComC;

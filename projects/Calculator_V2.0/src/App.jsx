import Input from "./components/Input";
import Buttons from "./components/Buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
function App() {
  const [num, setNum] = useState("");

  return (
    <>
      <div className="myContainer">
        <Input display={num}/>
        <Buttons setNum={setNum} num={num}/>
      </div>
    </>
  );
}

export default App;

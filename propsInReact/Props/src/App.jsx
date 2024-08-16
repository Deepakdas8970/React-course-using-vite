import "bootstrap/dist/css/bootstrap.min.css";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import "./App.css";

function App() {
  //we can pass array and object only this place not inside the jsx part 
  let arr=["Deepak Das","18"];
  return (
    <>
      <Card1 header='Deepak'/>
      <Card2 name={arr[0]}  age={arr[1]} />
    </>
  );
}

export default App;

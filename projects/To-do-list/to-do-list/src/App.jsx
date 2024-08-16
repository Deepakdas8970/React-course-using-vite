import Appname from "./components/Appname";
import ADD_TODO from "./components/ADD_TODO";
import ToDoItem1 from "./components/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

function App() {
  return (
    <>
      <Appname/>
      <ADD_TODO/>
      <div class="container">

        <ToDoItem1></ToDoItem1>
        <ToDoItem2></ToDoItem2>
        
      </div>
    </>
  );
}

export default App;

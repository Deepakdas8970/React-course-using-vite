import Appname from "./components/Appname";
import ADD_TODO from "./components/ADD_TODO";
import ToDoItems from "./components/ToDoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let ToDodata = [
    { name: "Greem Smith", date: "12-10-2003" },

    { name: "Glane Maxwell", date: "02-10-2003" },

    { name: "Deepak Das", date: "30-10-2003" },
    { name: "Rajendra Yadav", date: "31-10-2003" },
    { name: "Rohit Sharma", date: "30-09-2003" },
    { name: "Virat Kohli", date: "30-08-2003" },
  ];

  return (
    <>
      <Appname />
      <ADD_TODO />
      <ToDoItems data={ToDodata} />
    </>
  );
}

export default App;

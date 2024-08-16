import Appname from "./components/Appname";
import ADD_TODO from "./components/ADD_TODO";
import ToDoItems from "./components/ToDoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  let ToDodata = [
    { name: "Greem Smith", date: "12-10-2003" },

    { name: "Glane Maxwell", date: "02-10-2003" },

    { name: "Deepak Das", date: "30-10-2003" },
    { name: "Rajendra Yadav", date: "31-10-2003" },
    { name: "Rohit Sharma", date: "30-09-2003" },
    { name: "Virat Kohli", date: "30-08-2003" },
  ];

  let [toDoData, setToDoData] = useState(ToDodata);

  const handleOnClick = (newName,newDate) => {
    setToDoData(newName, newDate);
    const newToDoitem = [...toDoData, { name: `${newName}`, date:`${newDate}`}];
    setToDoData(newToDoitem);
  };

  return (
    <>
      <Appname />
      <ADD_TODO handleOnClick={handleOnClick} />
      <ToDoItems newData={toDoData} />
      {/* <ToDoItems data={ToDodata} /> */}
    </>
  );
}

export default App;

import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addUser, clearAllUser, removeUser } from "./store/slices/ToDoSlice";

const ToDoItems = () => {
  let toDoData = [
    "rohit",
    "virat",
    "deepak",
    "rajendra",
    "rahul",
    "risabh",
    "hardik",
    "bumrah",
  ];
  // const [addedData, setData] = useState([]);
  let [i, setI] = useState(0);
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const addData = () => {
    /* //js way logic
    /* if (addedData.length == toDoData.length) {
      alert("No Data are remain");
    } else {
      addedData[i] = toDoData[i];
      setData(addedData);
      
      console.log(data);
      setI(i+1);
    } */
    //standerd logic in react
    // if (addedData.length == toDoData.length) {
    //   alert("No data are remain");
    // } else {
    //   setData([...addedData, toDoData[i]]);
    //   setI(i + 1);
    // } */

    // for redux
    if (data.length == toDoData.length) {
      alert("No data are remain");
    } else {
      dispatch(addUser(toDoData[i]));
      i += 1;
      setI(i);
    }
  };

  const deleteData = (item) => {
    // setData(addedData.filter((item) => item !== toDeleteitem));
    dispatch(removeUser(item));
  };
  const clearAll = () => {
    //  setData([]);
    //setI(0)  ;
    dispatch(clearAllUser());
    setI(0);
  };

  return (
    <>
      <div className="text-center">
        <div className="d-flex justify-content-center">
          <h4 className>List of users</h4>
          <button className="btn btn-warning ms-4" onClick={addData}>
            <IoIosAddCircleOutline /> Add more Users
          </button>
        </div>
        <ul type="none" className="m-5">
          {/* {toDoData.map((item) => (
            <li className="p-2 border fs-3">
              {item}
              <span style={{ float: "right" }} onClick={() => deleteData(item)}>
                <RiDeleteBin6Fill />
              </span>
            </li>
          ))}*/}
          {data.map((item,id) => (
            <li className="p-2 border fs-3" key={id}>
              {item}
              <span style={{ float: "right" }} onClick={() => deleteData(item)}>
                <RiDeleteBin6Fill />
              </span>
            </li>
          ))}
        </ul>
        <button className="btn btn-danger" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </>
  );
};

export default ToDoItems;

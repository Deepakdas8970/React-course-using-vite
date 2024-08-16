import { useState } from "react";
import styles from "./ADD_TODO.module.css";
function ADD_TODO({ handleOnClick }) {
  const [newtodoName, setNewName] = useState();

  const [newtodoDate, setNewDate] = useState();

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  };

  const handleOnButtonClick = () => {
    handleOnClick(newtodoName, newtodoDate);
    setNewName("");
    setNewDate("");
  };

  return (
    <div class="container text-center">
      <div class="row myrow">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter TO-DO list..."
            onChange={handleNameChange}
            value={newtodoName}
          />
        </div>
        <div class="col-4">
          <input type="date" onChange={handleDateChange} value={newtodoDate} />
        </div>
        <div className={`${styles["AddButton"]} col-2`}>
          <button
            type="button"
            class="btn btn-danger myButton"
            onClick={handleOnButtonClick}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default ADD_TODO;

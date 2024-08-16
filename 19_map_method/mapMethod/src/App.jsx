import FoodItems from "./components/FoodItems";
import "./App.css";
import Container from "./components/Container";
import FoodList from "./components/FoodList";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  // 'Dal','Chaval','roti','salad','milk'
  // let foodItem = [
  //   "GreenVegetables",
  //   "Rice",
  //   "DryFruits",
  //   "Roti",
  //   "salad",
  //   "milk",
  // ];

  // props passing as a function

  //let foodData="text is written here !";
  let [foodItem, setfoodItem] = useState([]);

  const handleonkeydown = (Event) => {
    if (Event.key === "Enter") {
      let newfoodItem = Event.target.value;

      let newItems = [...foodItem, newfoodItem];
      setfoodItem(newItems);
      Event.target.value="";
    }
  };

  // function passing throught props

  const handleOnClick = (item) => {
    alert(`${item} Is being brought`);
    console.log(item);
  };
  return (
    <Container>
      <FoodItems />

      <Input handleKeyDown={handleonkeydown} />
      {foodItem.length === 0 ? <h3>I am still hungry</h3> : null}

      <FoodList foodItem={foodItem} handleOnClick={handleOnClick} />
    </Container>
  );
}

export default App;

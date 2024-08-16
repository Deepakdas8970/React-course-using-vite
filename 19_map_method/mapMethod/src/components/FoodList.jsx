import styles from "./FoodList.module.css";
const FoodList = ({ foodItem,handleOnClick }) => {

  // here handleOnClick is passed as function props


  return (
    <>
      <ul className="list-group">
        {foodItem.map((items) => (
          <li className="list-group-item ">
            {items}
            <span>
              <button
                className={`${styles.myButton} btn btn-info`}
                onClick={()=>handleOnClick(items)}
              >
                Buy
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FoodList;

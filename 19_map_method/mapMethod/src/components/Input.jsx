import styles from "./Input.module.css";
const Input = ({handleKeyDown}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter the food item..."
        className={`${styles.input}`}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
export default Input;

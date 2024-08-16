import styles from "./Button.module.css";
const Button = ({ items,pressKey}) => {
 
  return (
    <>
      {items.map((data, index) => (
        <div
          class={`col-2 ${styles.button}`}
          style={{
            background: index === 19 ? "red" : "rgba(112, 110, 110, 0.782)",
          }}

          onClick={pressKey}
        >
          {data }
        </div>
      ))}
    </>
  );
};
export default Button;

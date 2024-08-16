import styles from "./Button.module.css";
const Button = ({ items }) => {


  return (
    <>
      {items.map((data, index) => (
        <div
          className={`col-2 ${styles.button}`}
          style={{
            background: index === 19 ? "red" : "rgba(112, 110, 110, 0.782)",
          }}
       
        >
          {data}
        </div>
      ))}
    </>
  );
};
export default Button;

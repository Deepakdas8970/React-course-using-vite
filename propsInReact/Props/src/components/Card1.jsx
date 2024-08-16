//import css module
import styles from "./Card1.module.css";

const Card1 = (props) => {
  // Way of props passing into compnents:-

  // props argument is a standerd way for passing props
  // {{header}} is shorthand way for passing props. its a object destructuring method and mostly used.
  return (
    <>
      <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
        {/* props is a object uses for data passing in components.
        it makes the components for reusabling.
         
        {props.header||"header"} here ""header" is defult value of props
        */}

        {/* Using CSS module class: `${styles["dHeader"]}` ensures the styles are scoped to this component only,
            while `card-header` and `border-success` are global Bootstrap classes. */}
        <div className={`${styles["dHeader"]} card-header border-success`}>
          {props.header || "header"}
        </div>
        <div className={`${styles["dBody"]} card-body`}>
          <h5 className="card-title">Success card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
           {/* Using CSS module class for the footer */}
        <div className={`${styles["dFooter"]} card-footer border-success`}>
          Footer
        </div>
      </div>
    </>
  );
};
export default Card1;

import React, { useRef, useState } from "react";

const UseRef = () => {
  const name = useRef(null);
  const [show, setShow] = useState(false);

  function handleOnSubmit(e) {
    e.preventDefault();
   let myName= name.current.value;
   (myName==="")?alert("Please write something..."):setShow(true);

    
  }
  return (
    <>
      <div className="d-flex justify-content-center bg-info m-5 p-5">
        <form action="" onSubmit={handleOnSubmit}>
          <input type="text" placeholder="Enter Your Name..." ref={name} />
          <br />
          <button className="btn btn-warning">Submit</button>
        </form>
      </div>
      <p className="text-center fw-bold bg-success text-white">{show ? name.current.value : null}</p>;
    </>
  );
};

export default UseRef;

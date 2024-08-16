import React from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate=useNavigate();
  const goBackOnHome=()=>{
    navigate('/');
  }
  return (
    <>
      <NavBar></NavBar>
      <div>Services</div>
      <button onClick={goBackOnHome}>Go Back on Home page</button>
      
    </>
  );
};

export default Services;

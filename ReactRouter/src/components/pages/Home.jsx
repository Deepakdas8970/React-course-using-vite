import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"

const Home = () => {
  const navigate=useNavigate();
  const goService=()=>{
    navigate("/services")
  }

  return (
    <>
      <NavBar></NavBar>
      <div>Home</div>
      <button onClick={goService}>Go To Service Page</button>
    </>
  );
};

export default Home;

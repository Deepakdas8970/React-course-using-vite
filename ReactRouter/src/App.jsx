import React from "react";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Services from "./components/pages/Services";
import { Route, Routes } from "react-router-dom";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import "./App.css"


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<AboutUs />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
      {/* <AboutUs></AboutUs>
    <ContactUs></ContactUs>
    <Services></Services> */}
    </>
  );
};

export default App;

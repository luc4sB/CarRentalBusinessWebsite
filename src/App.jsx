import React, { useState } from "react";
import "./styles/App.css";

import Login from "./login.jsx";
import Homepage from "./Homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import PickYourCar from "./PickYourCar.jsx";
import End from "./End.jsx";




const App = () => {

  return (
    
    
      
      
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          
            <Route path="/" element={<Homepage />}/>
            <Route index element={<Homepage />} />
            <Route path="/homepage" element={<Homepage/>} />
            <Route path="/choosecar" element={<PickYourCar/>} />
            <Route path="/login" element={<Login/>} />
            
            <Route path="*" element={<Homepage />} />
          
        </Routes>
        <End></End>
      </BrowserRouter>
      
    
    );

};

export default App;

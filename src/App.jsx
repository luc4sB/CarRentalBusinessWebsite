import React, { useState } from "react";
import "./styles/App.css";

import Login from "./login.jsx";
import Homepage from "./Homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx"





const App = () => {

  return (
    
    
      
      
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          
            <Route path="/" element={<Homepage />}/>
            <Route index element={<Homepage />} />
            <Route path="/homepage" element={<Homepage/>} />
            <Route path="/login" element={<Login/>} >
            <Route path="*" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    
    );

};

export default App;

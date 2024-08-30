import React, { useEffect, useState } from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Index from "./components/Index";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";
import '../src/Assets/Css/Styles.css'
function App() {

  const [token, setToken] = useState(false);
  useEffect(() => {
    setToken(token);
    console.log(token);
  }, [token]);

  return (
    <>
    <BrowserRouter>
     <Header token={token}/>
     <Routes>
     <Route path="/" element={<Index />} />
     <Route path="/about" element={<About />} />
     <Route path="/login" element={<Login/>} />

     </Routes>
    
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

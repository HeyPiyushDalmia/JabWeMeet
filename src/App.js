import React, { useEffect, useState } from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Index from "./components/Index";
import Footer from "./components/Footer";
import Contact from "./components/Contactus"
import About from "./components/About";
import Login from "./components/Login";
import Signup from './components/Signup'
import CreateEvent from "./components/CreateEvent";
import SubMenu from "./components/SubMenu";
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
     <Route path="/contact" element={<Contact />} />
     <Route path="/login" element={<Login />} />
     <Route path="/createevent" element={<CreateEvent />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/SubMenu" element={<SubMenu/>} />

     </Routes>
    
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

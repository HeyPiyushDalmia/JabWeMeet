import React from "react";
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
import Myaccount from "./components/Myaccount";
import Pagenotfound from './components/Pagenotfound';
import Logout from "./components/Logout";
import '../src/Assets/Css/Styles.css'
import Events from "./components/Events";
function App() {


  return (
    <>
    <BrowserRouter>
     <Header/>
     <Routes>
     <Route path="/" element={<Index />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/login" element={<Login />} />
     <Route path="/createevent" element={<CreateEvent />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/SubMenu" element={<SubMenu/>} />
     <Route path="/Myaccount" element={<Myaccount/>} />
     <Route path ="*" element={<Pagenotfound/>}/>
     <Route path="/logout" element={<Logout/>} />
    <Route path="/events" element={<Events/>}/>


     </Routes>
    
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

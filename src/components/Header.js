import React,{useState} from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link} from "react-router-dom";

export default function Header({ token }) {
  const [showMenu, setShowMenu] = useState(false);
  return (

<header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-white">
      <Link
        to="/"
        className="flex items-center h-10 px-10  rounded-tl-full rounded-br-full font-bold  italic text-black hover:opacity-90"
      >
         {/* <img src={logo} className="mr-3 h-6 md:h-9" alt="Website Logo" /> */}
         <h1>Jab We Meet</h1>
      </Link>
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <Link to="/" className="hover:text-red-500">
          HOME
        </Link>
        <Link to="/about" className="hover:text-red-500">
          ABOUT
        </Link>
        
        <Link to="/" className="hover:text-red-500">
          EVENTS
        </Link>
        <Link to="/" className="hover:text-red-500">
          CONTACT
        </Link>
        {token === "true" ? (
  <Link to="/">
    <button className="navbar_button">MY ACCOUNT</button>
  </Link>
) : (
  <Link to="/login">
    <button className="navbar_button">LOGIN</button>
  </Link>
)}

      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-red-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <>
            <Link to="/" className="hover:text-red-500">
              HOME
            </Link>
            <Link to="/about" className="hover:text-red-500">
              ABOUT
            </Link>
         
            <Link to="/" className="hover:text-red-500">
              EVENTS
            </Link>
            <Link to="/" className="hover:text-red-500">
              CONTACT
            </Link>
            {token === "true" ? (
  <Link to="/my_account">
    <button className="navbar_button">My Account</button>
  </Link>
) : (
  <Link to="/login">
    <button className="navbar_button">LOGIN</button>
  </Link>
)}
            
          </>
        )}
      </nav>
    </header>

  );
}

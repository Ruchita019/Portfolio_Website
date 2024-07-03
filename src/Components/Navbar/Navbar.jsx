import {Menu, X} from "lucide-react"
import React, {useState} from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const [menu, setMenu] = useState("home");

  return (
    <nav
      className="sticky top-0 z-50 py-2 bg-opacity-70 backdrop-blur-md border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-14 w-15" src={logo} alt="logo" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li className="nav-elements"><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
            <li className="nav-elements"><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("home")}>About Me</p></AnchorLink></li>
            <li className="nav-elements"><AnchorLink className="anchor-link" offset={50} href="#skills"><p onClick={()=>setMenu("home")}>Technologies</p></AnchorLink></li>
            <li className="nav-elements"><AnchorLink className="anchor-link" offset={50} href="#project"><p onClick={()=>setMenu("home")}>Projects</p></AnchorLink></li>
            <li className="nav-elements"><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("home")}>Contact Me</p></AnchorLink></li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href='../../assets/RUCHITA_RESUME_AI.pdf' download className="custom-button px-7 py-2 rounded-full text-sm cursor-pointer">
              Resume
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end ">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X/> : <Menu/>}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12
          flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li className="py-4">Home</li>
              <li className="py-4">About me</li>
              <li className="py-4">Skills</li>
              <li className="py-4">Projects</li>
              <li className="py-4">Contact me</li>
              <li className="py-4">Resume</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import {Menu, X} from "lucide-react"
import React, {useState} from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from '../../assets/RUCHITA_RESUME.pdf'

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const [menu, setMenu] = useState("home");

  return (
    <nav
      className="mb-20 flex items-center justify-between py-6">
      <div className="container px-24 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-20 w-26" src={logo} alt="logo" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li className="nav-elements"><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
            <li className="nav-elements"><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("home")}>About Me</p></AnchorLink></li>
            <li className="nav-elements"><AnchorLink className="anchor-link" offset={50} href="#skills"><p onClick={()=>setMenu("home")}>Technologies</p></AnchorLink></li>
            <li className="nav-elements"><AnchorLink className="anchor-link" offset={50} href="#project"><p onClick={()=>setMenu("home")}>Projects</p></AnchorLink></li>
            <li className="nav-elements"><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("home")}>Contact Me</p></AnchorLink></li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href={Resume} download className="custom-button px-7 py-2 rounded-full text-sm cursor-pointer">
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
              <li className="py-4"><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
              <li className="py-4"><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("home")}>About Me</p></AnchorLink></li>
              <li className="py-4"><AnchorLink className="anchor-link" offset={50} href="#skills"><p onClick={()=>setMenu("home")}>Technologies</p></AnchorLink></li>
              <li className="py-4"><AnchorLink className="anchor-link" offset={50} href="#project"><p onClick={()=>setMenu("home")}>Projects</p></AnchorLink></li>
              <li className="py-4"><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("home")}>Contact Me</p></AnchorLink></li>
              <li className="py-4"><a href={Resume} download >Resume</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

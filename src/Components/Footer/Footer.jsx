import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className=" text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold">Ruchita</h1>
            {/* <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p> */}
          </div>
          <div className="flex mt-4 md:mt-0">
            <a href="https://github.com/Ruchita019" className="text-gray-400 hover:text-white mx-2">Github</a>
            <a href="https://www.linkedin.com/in/ruchita-ruchita/" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

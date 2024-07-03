import React from "react";
import Profile from "../../assets/home.jpg";
import {ABOUT_TEXT} from '../../constants/index'
import { motion } from "framer-motion";

const About_me = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h2 className="mt-40 mb-20 text-center text-3xl">
        <span className="text-neutral-500">About</span>
        Me
      </h2>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 0.7}}
        className="w-full lg:w-1/3 lg:p-5">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={Profile} alt="about" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{duration: 0.8}}
        className="w-full lg:w-2/3 ">
          <div className="flex justify-center lg:justify-start">
            <p className="m-20 max-w-xl py-6">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About_me;

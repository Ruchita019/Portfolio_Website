import React from "react";
import './Skills.css'
import { motion } from "framer-motion";

import Python from "../../assets/Python.svg";
import Pandas from "../../assets/Pandas.svg";
import Numpy from "../../assets/NumPy.svg";
import Matplotlib from "../../assets/Matplotlib.svg";
import Scikitlearn from "../../assets/scikit-learn.svg";
import Tensorflow from "../../assets/TensorFlow.svg";
import Keras from "../../assets/Keras.svg";
import Flask from "../../assets/Flask.svg";
import Opencv from "../../assets/OpenCV.svg";
import Streamlit from "../../assets/Streamlit.svg";
import HTML from "../../assets/HTML5.svg";
import CSS from "../../assets/CSS3.svg";
import JavaScript from "../../assets/JavaScript.svg";
import react from "../../assets/React.svg";
import TailwindCSS from "../../assets/TailwindCSS.svg";
import MySQL from "../../assets/MySQL.svg";
import Firebase from "../../assets/Firebase.svg";


const iconVarients = (duration) => ({
  intial: {y: -10},
  animate:{
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  },
})


const skills = () => {
  return (
    <div id='skills' className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial = {{opacity:0, y:-50}}
      transition={{duration: 1.5}}
      className="mt-40 mb-20 text-center text-3xl">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial = {{opacity:0, x:-100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVarients(2)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Python} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(3)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Pandas} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(2.5)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Numpy} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(4)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Matplotlib} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(5)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Scikitlearn} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(6)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Tensorflow} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(4)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Keras} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(3)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Flask} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(2)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Opencv} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(2.5)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Streamlit} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(4)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={HTML} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(3)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={CSS} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(2)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={JavaScript} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(3)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={react} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(4)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={TailwindCSS} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(2)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={MySQL} alt="" className="icons" />
        </motion.div>
        <motion.div 
        variants={iconVarients(4)}
        intial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Firebase} alt="" className="icons" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default skills;

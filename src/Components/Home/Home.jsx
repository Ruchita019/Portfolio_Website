import React from "react";
import "./Home.css";
import profile_pic from "../../assets/home.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Home = () => {
  return (
    <div id='home' className="home">
      <motion.img
        variants={container(0.4)}
        initial="hidden"
        animate="visible"
        src={profile_pic}
        alt=""
        className="profile-pic"
      />

      <motion.h1 variants={container(0.6)} initial="hidden" animate="visible">
        <span>Hi! I am Ruchita,</span> Machine Learning Engineer
      </motion.h1>

      <motion.h2 variants={container(0.8)} initial="hidden" animate="visible">
        Connect with Me
      </motion.h2>
      <motion.div
        className="social-icons"
        variants={container(1)}
        initial="hidden"
        animate="visible"
      >
        <a
          href="https://github.com/Ruchita019"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ruchita-ruchita/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a href="mailto:your-ruchitambo19@gmail.com">
          <IoIosMail />
        </a>
      </motion.div>
    </div>
  );
};

export default Home;

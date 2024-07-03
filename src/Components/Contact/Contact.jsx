import React from "react";
import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { motion } from "framer-motion";

const contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4b8ad893-5b5c-4997-996a-b12085aaf61f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res)=> res.formData());

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();

    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-40 mb-16 text-center text-3xl"
      >
        Get in Touch
      </motion.h1>
      <div className="contact-section">
        <div className="contact-left">
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
          >
            {" "}
            Let's Talk
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
          >
            I am currently looking for Job oppurtunity, so feel free to contact
            me
          </motion.p>
          <motion.div 
          whileInView={{opacity:1, x:0}}
          initial = {{opacity:0, x:-100}}
          transition={{duration: 1.5}}
          className="contact-details">
            <div className="contact-detail">
              <IoIosMail /> <p>ruchitambox19@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FaPhoneAlt /> <p>+91 8595861492</p>
            </div>
            <div className="contact-detail">
              <IoLocation /> <p>Faridabad, Haryana</p>
            </div>
          </motion.div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor=" ">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;

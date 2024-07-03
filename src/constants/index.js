import project1 from "../assets/projects/summarease.png";
import project2 from "../assets/projects/objectdetection.png";
import project3 from "../assets/projects/price.jpeg";
import project4 from "../assets/projects/sales.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "SummarEase",
    image: project1,
    description:
      "A Streamlit-based web-app that efficiently summarizes YouTube videos, blogs, and PDFs using Google Gemini and provide text summaries and audio summary files. ",
    technologies: ["Python", "Google Gemini", "Streamlit", "Langchain"],
  },
  {
    title: "Object Detection",
    image: project2,
    description:
      "A face detection model with an accuracy of 0.85 that identify and localize faces.",
    technologies: ["YOLOv8", "OpenCV", "CVAT"],
  },
  {
    title: "Housing Price Prediction",
    image: project3,
    description:
      "A price predicting model focused on forecasting house prices in Bangalore, utilizing Linear Regression, Ridge Regression and Lasso Regression.",
    technologies: ["Scikit-learn", "Pandas", "Flask", "HTML"],
  },
  {
    title: "Sales Analysis",
    image: project4,
    description:
      "A sales analysis project using Pandas and MySQL, extracting, cleaning, and analyzing data to reveal key insights.",
    technologies: ["Pandas", "MySQL", "Matplotlib"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

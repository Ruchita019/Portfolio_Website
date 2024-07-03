import React from "react";
import { PROJECTS } from "../../constants/index";
import { motion } from "framer-motion";
import './Project.css'
const Project = () => {
  return (
    <div id="project" className="border-b border-neutral-900 pb-4">
      <div className="my-20 text-center text-4xl">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
        >
          Projects
        </motion.h2>
      </div>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={200}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h5 className="mb-2 font-semibold">
                {project.title}
                <a
                  href={project.link}
                  className="ml-2 w-11 rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-neutral-400"
                >
                  LINK
                </a>
              </h5>
              <p className="mb-4 text-neutral-400 text-sm">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

import React, { useState } from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, image: "./promptopia.png", title: "Promptopia", link: "https://promptopia-two-beta-10.vercel.app/" },
    { id: 2, image: "./MacBook Pro 16-inch Space Black Front label.png", title: "EduFinance" },
    { id: 3, image: "./Tzeyni Home Page.png", title: "Tzeyni" },
    { id: 4, image: "./Abrid.png", title: "Abrid Project" },
    { id: 5, image: "./nextadmindash.png", title: "Next Admin Dashboard", link: "https://nextadmindash.vercel.app/" },
    { id: 6, image: "./Login-USPN.png", title: "USPN App Login" },
    { id: 7, image: "./Homepage_TBH_page-0001.jpg", title: "The Big Heart Website" },
  ];

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth ${css.container}`}>
        <motion.div variants={textVariant(0.4)} className={css.heading}>
          <span className="primaryText">My Latest Works</span>
          <p>Perfect solution for digital experience</p>
        </motion.div>

        <div className={css.showCase}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              className={css.project}
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} />
              <div className={css.projectInfo}>
                <h3>{project.title}</h3>
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <div className={css.modal} onClick={() => setSelectedProject(null)}>
            <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
              <img src={selectedProject.image} alt={selectedProject.title} />
              <h2>{selectedProject.title}</h2>
              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className={css.viewButton}>
                  View Project
                </a>
              )}
              <button className={css.closeButton} onClick={() => setSelectedProject(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Portfolio;
import React from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import css from "./Education.module.scss";

const Education = () => {
  const educationData = [
    {
      institution: "IFIAG/Université Sorbonne Paris Nord, Casablanca",
      degree: "licence professionnelle Développement Web, Mobile & Digital",
      tenure: "10/2023 - Présent",
      color: "#286F6C",
    },
    {
      institution: "BTS - Lycée Al Khaouarizmi, Casablanca",
      degree: "2ème année Systèmes et Réseaux Informatiques",
      tenure: "09/2022 - 07/2023",
      mention:
        "Obtention de Brevet de Technicien Supérieur en Systèmes et Réseaux Informatiques",
      color: "#EEC048",
    },
    {
      institution: "BTS - Lycée Al Khaouarizmi, Casablanca",
      degree: "1ère année Systèmes et Réseaux Informatiques",
      tenure: "09/2021 - 06/2022",
      mention:
        "Matières préférées : Développement, Systèmes d'exploitation GNU/Linux",
      color: "#F2704E",
    },
    {
      institution: "Lycée Al Khaouarizmi, Casablanca",
      degree: "Baccalauréat Sciences et Technologies Mécanique",
      tenure: "09/2020 - 06/2021",
      mention: "Mention Bien",
      color: "#286F6C",
    },
  ];

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="education"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.span variants={textVariant2} className="primaryText yPaddings">
          Formation
        </motion.span>

        <div className={css.experiences}>
          {educationData.map((edu, i) => (
            <motion.div
              variants={fadeIn("up", "tween", i * 0.2, 1)}
              key={i}
              className={css.experience}
            >
              <div className={css.post}>
                <h3>{edu.institution}</h3>
                <p>{edu.tenure}</p>
              </div>
              <div className={css.role}>
                <h4>{edu.degree}</h4>
                <p>{edu.mention}</p>
              </div>
              <div
                className={css.circle}
                style={{ background: edu.color }}
              ></div>
            </motion.div>
          ))}

          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className={css.line}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;

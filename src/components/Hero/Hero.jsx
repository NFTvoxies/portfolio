import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.h1 className={css.name} variants={fadeIn("right", "tween", 0.2, 1)}>
            Salut,
            <br />
            Je suis Youssef Lafkih.
          </motion.h1>
          <motion.p className={css.tagline} variants={fadeIn("left", "tween", 0.4, 1)}>
            Je conçois et construis de belles choses simples,
            <br />
            et j'aime ce que je fais.
          </motion.p>
        </div>

        <div className={css.heroContent}>
          <div className={css.buttons}>
            <motion.a 
              className={`${css.button} ${css.emailButton}`} 
              href="mailto:youssef.lafkih03@gmail.com"
              variants={fadeIn("up", "tween", 0.6, 1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail /> Envoyez-moi un email
            </motion.a>
            <motion.a 
              className={`${css.button} ${css.cvButton}`} 
              href="https://drive.google.com/file/d/1ZZfqos30SxZcfgKbqUHFR8-02sNZXl8M/view" 
              download="Youssef_Lafkih_CV"
              variants={fadeIn("up", "tween", 0.7, 1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload /> Télécharger CV
            </motion.a>
          </div>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={css.person}
          >
            <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./pp_nice.png" alt="Youssef Lafkih" />
          </motion.div>
        </div>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className={css.experienceNumber}>2</div>
            <div className={css.experienceText}>
              <div>Années</div>
              <div>d'Expérience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="Certificat" />
            <span>PROFESSIONNEL CERTIFIÉ</span>
            <span>DÉVELOPPEUR FULL-STACK</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

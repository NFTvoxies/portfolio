import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Faisons quelque chose <br />
            d'incroyable ensemble.
          </span>
          <span className="primaryText">
            Commencez par <a href="mailto:youssef.lafkih03@gmail.com">dire bonjour</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Informations</span>
            <p>Maroc, Casablanca, Rue 12 Maarif</p>
          </div>
          <ul className={css.menu}>
            <li>Services</li>
            <li>Travaux</li>
            <li>Notes</li>
            <li>Expérience</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;

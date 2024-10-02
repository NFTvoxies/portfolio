import React, { useState } from "react";
import css from "./Contact.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Le nom est requis";
    if (!form.email) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "L'email est invalide";
    }
    if (!form.message) newErrors.message = "Le message est requis";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Envoi de l'email avec EmailJS
      emailjs
        .send("portfolio", "template_76ja14i", form, "youssef")
        .then((response) => {
          console.log("SUCCÈS!", response.status, response.text);
          setIsSubmitted(true);
          setForm({ name: "", email: "", message: "" });
          setErrors({});
          toast.success("Merci de nous avoir contactés!");
        })
        .catch((error) => {
          console.log("ÉCHEC...", error);
          toast.error("Échec de l'envoi du message. Veuillez réessayer.");
        });
    }
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="contact"></a>
      <ToastContainer />
      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.heading}
        >
          <h2 className="primaryText">Entrer en Contact</h2>
          <p className="secondaryText">
            N'hésitez pas à nous contacter pour des collaborations ou simplement pour discuter.
          </p>
        </motion.div>

        <motion.form
          variants={fadeIn("up", "tween", 0.5, 1)}
          className={css.form}
          onSubmit={handleSubmit}
        >
          <div className={css.inputGroup}>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Votre Nom"
              required
            />
            {errors.name && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={css.error}
              >
                {errors.name}
              </motion.span>
            )}
          </div>
          <div className={css.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Votre Email"
              required
            />
            {errors.email && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={css.error}
              >
                {errors.email}
              </motion.span>
            )}
          </div>
          <div className={css.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Votre Message"
              required
            />
            {errors.message && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={css.error}
              >
                {errors.message}
              </motion.span>
            )}
          </div>
          <motion.button
            type="submit"
            className={css.submitButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Envoyer le Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;

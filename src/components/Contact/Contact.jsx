import React, { useState } from "react";
import css from "./Contact.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an email service or API)
    console.log(form);
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

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className={css.heading}>
          <span className="primaryText">Get in Touch</span>
          <p className="secondaryText">Feel free to reach out for collaborations or just a friendly chat.</p>
        </motion.div>

        <motion.form variants={fadeIn("up", "tween", 0.5, 1)} className={css.form} onSubmit={handleSubmit}>
          <div className={css.inputGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className={css.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className={css.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} required />
          </div>
          <button type="submit" className={css.submitButton}>Send Message</button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;

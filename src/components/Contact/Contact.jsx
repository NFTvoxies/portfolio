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
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Sending email using EmailJS
      emailjs
        .send("portfolio", "template_76ja14i", form, "youssef")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
          setForm({ name: "", email: "", message: "" });
          setErrors({});
          toast.success("Thank you for contacting us!");
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again.");
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
          <span className="primaryText">Get in Touch</span>
          <p className="secondaryText">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </motion.div>

        <motion.form
          variants={fadeIn("up", "tween", 0.5, 1)}
          className={css.form}
          onSubmit={handleSubmit}
        >
          <div className={css.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className={css.error}>{errors.name}</span>}
          </div>
          <div className={css.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className={css.error}>{errors.email}</span>}
          </div>
          <div className={css.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
            {errors.message && (
              <span className={css.error}>{errors.message}</span>
            )}
          </div>
          <button type="submit" className={css.submitButton}>
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;

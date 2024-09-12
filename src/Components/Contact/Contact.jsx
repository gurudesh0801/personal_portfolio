import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">I'd love to hear from you!</p>
      </div>

      <div className="contact-form">
        <form action="https://formspree.io/f/{your-form-id}" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="social-links">
        <a
          href="www.linkedin.com/in/prasad-deshpande-a59530267"
          className="social-link"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/guru_deshpande.0801/"
          className="social-link"
          target="_blank"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/@GuruzCode"
          className="social-link"
          target="_blank"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://x.com/gurudesh2204"
          className="social-link"
          target="_blank"
        >
          <i className="fab fa-x"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;

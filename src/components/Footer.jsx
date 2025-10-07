import React from "react";
import { motion } from "framer-motion";
import DevSig from "../assets/dev-doc-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const socialIcons = [
    { icon: "bi-facebook", color: "#1877f2" },
    { icon: "bi-twitter", color: "#1da1f2" },
    { icon: "bi-linkedin", color: "#0a66c2" },
    { icon: "bi-instagram", color: "#e4405f" },
  ];

  return (
    <motion.footer
      className="bg-dark text-light pt-5 pb-3 mt-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="row" variants={containerVariants}>
          {/* Practice Info */}
          <motion.div
            className="col-lg-4 col-md-6 mb-4"
            variants={itemVariants}
          >
            <motion.div
              className="d-flex align-items-center mb-3"
              whileHover={{ x: 5 }}
            >
              <i className="bi bi-heart-pulse fs-3 text-primary me-2"></i>
              <h5 className="text-primary mb-0">DR MWAMBA</h5>
            </motion.div>
            <p className="text-light-emphasis">
              Providing exceptional medical care with compassion and expertise.
              Your health and well-being are our top priorities.
            </p>
            <div className="d-flex gap-3">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.icon}
                  href="#"
                  className="text-secondary fs-5"
                  whileHover={{ scale: 1.2, color: social.color, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="col-lg-2 col-md-6 mb-4"
            variants={itemVariants}
          >
            <h6 className="text-primary mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              {["Home", "About Us", "Services", "Contact"].map((link) => (
                <motion.li key={link} className="mb-2" whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="text-light-emphasis text-decoration-none d-flex align-items-center"
                  >
                    <motion.i
                      className="bi bi-chevron-right text-secondary me-1 small"
                      whileHover={{ x: 3 }}
                    ></motion.i>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="col-lg-3 col-md-6 mb-4"
            variants={itemVariants}
          >
            <h6 className="text-primary mb-3">Our Services</h6>
            <ul className="list-unstyled">
              {[
                "General Consultation",
                "Preventive Care",
                "Health Screening",
                "Chronic Disease Management",
              ].map((service) => (
                <motion.li key={service} className="mb-2" whileHover={{ x: 5 }}>
                  <span className="text-light-emphasis d-flex align-items-center">
                    <motion.i
                      className="bi bi-check-circle text-secondary me-2"
                      whileHover={{ scale: 1.2 }}
                    ></motion.i>
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="col-lg-3 col-md-6 mb-4"
            variants={itemVariants}
          >
            <h6 className="text-primary mb-3">Contact Info</h6>
            <div className="mb-3">
              {[
                {
                  icon: "bi-geo-alt",
                  text: "123 Medical Center Drive\nHealthcare City, HC 12345",
                },
                { icon: "bi-telephone", text: "(555) 123-4567" },
                { icon: "bi-envelope", text: "info@drmwamba.com" },
                { icon: "bi-clock", text: "Mon-Fri: 8AM-6PM" },
              ].map((contact) => (
                <motion.div
                  key={contact.icon}
                  className="d-flex align-items-start mb-2"
                  whileHover={{ x: 5 }}
                >
                  <i
                    className={`bi ${contact.icon} text-secondary me-2 mt-1`}
                  ></i>
                  <span
                    className="text-light-emphasis small"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Emergency Contact */}
            <motion.div
              className="bg-primary bg-opacity-10 p-3 rounded"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="d-flex align-items-center mb-2">
                <motion.i
                  className="bi bi-exclamation-triangle text-warning me-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.i>
                <strong className="text-warning small">Emergency</strong>
              </div>
              <p className="text-light-emphasis small mb-2">
                After hours emergency care
              </p>
              <motion.a
                href="tel:555-911"
                className="btn btn-sm btn-outline-warning w-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-telephone me-1"></i>
                Call 555-911
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.hr
          className="border-secondary my-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Developed By Section */}
        <motion.div
          className="d-flex justify-content-center align-items-center gap-2 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-light-emphasis small">Developed By:</span>
          <motion.a
            href="https://unclesmol.github.io/dev-doc"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img
              src={DevSig}
              alt="DevSig Logo"
              style={{ width: "100px", height: "auto" }}
            />
          </motion.a>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="row align-items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-light-emphasis small">
              &copy; {currentYear} DR MWAMBA Medical Practice. All rights
              reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-4 small">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="text-light-emphasis text-decoration-none"
                  whileHover={{ color: "#198754", y: -1 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

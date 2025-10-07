import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <section
      className="not-found-page min-vh-100 d-flex align-items-center"
      style={{ overflowX: "hidden" }}
    >
      <div className="container">
        <motion.div
          className="row justify-content-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="col-lg-8" variants={itemVariants}>
            {/* Animated 404 Number */}
            <motion.div
              className="error-number mb-4"
              variants={pulseVariants}
              initial="initial"
              animate="pulse"
            >
              <div className="d-flex justify-content-center align-items-center">
                <motion.span
                  className="display-1 fw-bold text-primary"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  4
                </motion.span>
                <motion.div
                  className="medical-icon mx-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <i className="bi bi-heart-pulse display-1 text-danger"></i>
                </motion.div>
                <motion.span
                  className="display-1 fw-bold text-primary"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  4
                </motion.span>
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div variants={itemVariants}>
              <h2 className="display-4 fw-bold text-dark mb-4">
                Page Not Found
              </h2>
              <p className="lead text-muted mb-5 fs-4">
                We're sorry, but the page you're looking for seems to have taken
                a sick day. Don't worry - our medical team is here to help you
                find your way back to health!
              </p>
            </motion.div>

            {/* Medical-themed Illustration */}
            <motion.div
              className="medical-illustration mb-5"
              variants={itemVariants}
            >
              <div className="d-flex justify-content-center">
                <div className="medical-symbol bg-primary bg-opacity-10 rounded-circle p-5">
                  <i className="bi bi-search display-1 text-primary"></i>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="action-buttons d-flex gap-3 justify-content-center flex-wrap mb-5"
              variants={itemVariants}
            >
              <Link to="/">
                <motion.button
                  className="btn btn-primary btn-lg px-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="bi bi-house me-2"></i>
                  Return Home
                </motion.button>
              </Link>

              <Link to="/services">
                <motion.button
                  className="btn btn-outline-primary btn-lg px-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="bi bi-heart-pulse me-2"></i>
                  Our Services
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  className="btn btn-secondary btn-lg px-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="bi bi-telephone me-2"></i>
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>

            {/* Emergency Notice */}
            <motion.div
              className="emergency-notice mt-5"
              variants={itemVariants}
            >
              <div className="alert alert-warning border-0 shadow-sm">
                <div className="row align-items-center">
                  <div className="col-md-1 text-center">
                    <i className="bi bi-exclamation-triangle-fill display-6 text-warning"></i>
                  </div>
                  <div className="col-md-8">
                    <h5 className="text-warning mb-2">Medical Emergency?</h5>
                    <p className="text-muted mb-0">
                      If you're experiencing a medical emergency, please don't
                      wait. Call our emergency line immediately.
                    </p>
                  </div>
                  <div className="col-md-3 text-center text-md-end">
                    <motion.a
                      href="tel:112"
                      className="btn btn-warning btn-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="bi bi-telephone me-2"></i>
                      Call 112
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="quick-links mt-5" variants={itemVariants}>
              <h6 className="text-muted mb-3">Quick Navigation</h6>
              <div className="d-flex justify-content-center flex-wrap gap-4">
                {[
                  { name: "Home", path: "/", icon: "bi-house" },
                  { name: "About", path: "/about", icon: "bi-person" },
                  {
                    name: "Services",
                    path: "/services",
                    icon: "bi-clipboard-plus",
                  },
                  { name: "Hours", path: "/hours", icon: "bi-clock" },
                  { name: "Contact", path: "/contact", icon: "bi-telephone" },
                ].map((link, index) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className="text-decoration-none text-muted d-flex align-items-center"
                    >
                      <i className={`${link.icon} me-2`}></i>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .not-found-page {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding-top: 76px; /* Account for fixed navbar */
        }

        .error-number {
          font-family: "Arial", sans-serif;
        }

        .medical-symbol {
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .emergency-notice .alert {
          border-left: 4px solid var(--bs-warning);
        }

        @media (max-width: 768px) {
          .error-number .display-1 {
            font-size: 4rem;
          }

          .medical-symbol {
            width: 150px;
            height: 150px;
          }

          .medical-symbol .display-1 {
            font-size: 3rem;
          }
        }

        @media (max-width: 576px) {
          .error-number .display-1 {
            font-size: 3rem;
          }

          .action-buttons .btn {
            width: 100%;
            margin-bottom: 1rem;
          }

          .emergency-notice .row > div {
            text-align: center;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default NotFound;

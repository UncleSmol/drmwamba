import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import DevSig from "../assets/dev-doc-logo.svg";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      icon: "bi-house",
      path: "/",
      active: location.pathname === "/",
    },
    {
      name: "About",
      icon: "bi-person",
      path: "/about",
      active: location.pathname === "/about",
    },
    {
      name: "Services",
      icon: "bi-clipboard-plus",
      path: "/services",
      active: location.pathname === "/services",
    },
    {
      name: "Hours",
      icon: "bi-clock",
      path: "/hours",
      active: location.pathname === "/hours",
    },
    {
      name: "Contact",
      icon: "bi-telephone",
      path: "/contact",
      active: location.pathname === "/contact",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const navLinkVariants = {
    hover: { x: 5, color: "#ffffff", transition: { duration: 0.3 } },
  };

  const mobileContainerVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { x: -50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          {/* Brand/Logo */}
          <motion.div
            className="navbar-brand fw-bold d-flex align-items-center"
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            <Link
              to="/"
              className="text-decoration-none text-white d-flex align-items-center"
            >
              <motion.i
                className="bi bi-heart-pulse me-2 d-none d-lg-inline"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              />
              DR MWAMBA
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="d-none d-lg-flex">
            <motion.ul
              className="navbar-nav ms-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  className="nav-item"
                  variants={itemVariants}
                >
                  <Link
                    to={item.path}
                    className={`nav-link position-relative d-flex align-items-center ${
                      item.active ? "active" : ""
                    }`}
                  >
                    <motion.span variants={navLinkVariants} whileHover="hover">
                      {item.name}
                    </motion.span>
                    {item.active && (
                      <motion.span
                        className="ms-2 bg-warning"
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Desktop Appointment Button */}
            <motion.div className="ms-lg-3" variants={itemVariants}>
              <Link to="/hours">
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="bi bi-calendar-check me-1"></i>
                  Book Appointment
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger Button */}
          <motion.button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={toggleMenu}
            aria-controls="mobileNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            style={{
              border: "none",
              background: "transparent",
              width: "40px",
              height: "40px",
              padding: 0,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="hamburger w-100 h-100 d-flex flex-column justify-content-center align-items-center"
              initial={false}
              animate={menuOpen ? "open" : "closed"}
            >
              <motion.span
                className="bg-white"
                style={{
                  display: "block",
                  width: "25px",
                  height: "2px",
                  margin: "3px 0",
                  borderRadius: "2px",
                }}
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 5 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="bg-white"
                style={{
                  display: "block",
                  width: "25px",
                  height: "2px",
                  margin: "3px 0",
                  borderRadius: "2px",
                }}
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="bg-white"
                style={{
                  display: "block",
                  width: "25px",
                  height: "2px",
                  margin: "3px 0",
                  borderRadius: "2px",
                }}
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -5 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>

          {/* Mobile Navigation Menu */}
          <motion.div
            className="mobile-nav-container d-lg-none position-absolute top-100 start-0 end-0 bg-primary shadow-lg"
            initial="closed"
            animate={menuOpen ? "open" : "closed"}
            variants={mobileContainerVariants}
            style={{
              overflow: "hidden",
              zIndex: 1000,
            }}
          >
            <div className="container py-4">
              {/* Mobile Navigation Grid */}
              <motion.ul
                className="nav-grid row g-3 justify-content-center list-unstyled mb-4"
                variants={mobileContainerVariants}
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    className="nav-grid-item col-4"
                    variants={mobileItemVariants}
                  >
                    <Link
                      to={item.path}
                      className={`nav-grid-link d-flex flex-column align-items-center justify-content-center ${
                        item.active ? "active" : ""
                      }`}
                      onClick={closeMenu}
                    >
                      <motion.i
                        className={`${item.icon} nav-grid-icon`}
                        whileHover={{ scale: 1.2 }}
                      />
                      <span className="nav-grid-text small mt-1">
                        {item.name}
                      </span>
                      {item.active && (
                        <motion.span
                          className="nav-grid-active-indicator"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Mobile Appointment Button */}
              <motion.div
                className="text-center mb-4"
                variants={mobileItemVariants}
              >
                <Link to="/hours" onClick={closeMenu}>
                  <motion.button
                    className="btn btn-secondary w-75"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="bi bi-calendar-check me-2"></i>
                    Book Appointment
                  </motion.button>
                </Link>
              </motion.div>

              {/* Developer Signature */}
              <motion.div
                className="text-center border-top border-secondary pt-3"
                variants={mobileItemVariants}
              >
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <span className="text-light-emphasis small">
                    Developed By:
                  </span>
                  <motion.a
                    href="https://unclesmol.github.io/dev-doc"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={DevSig}
                      alt="Developer Signature"
                      className="dev-signature"
                    />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Add padding to account for fixed navbar */}
      <style jsx>{`
        header {
          padding-top: 76px;
        }

        /* Desktop Navigation Styles */
        .nav-link {
          transition: all 0.3s ease;
          border-radius: 4px;
          margin: 0 2px;
          padding: 8px 16px !important;
          color: rgba(255, 255, 255, 0.8) !important;
          text-decoration: none;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff !important;
        }

        .nav-link.active {
          background: rgba(255, 255, 255, 0.15);
          color: #fff !important;
        }

        /* Mobile Grid Navigation Styles */
        .nav-grid {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nav-grid-item {
          aspect-ratio: 1;
        }

        .nav-grid-link {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          padding: 1rem 0.5rem;
        }

        .nav-grid-link:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          color: #fff;
        }

        .nav-grid-link.active {
          background: rgba(25, 135, 84, 0.3);
          border-color: var(--bs-primary);
        }

        .nav-grid-icon {
          font-size: 1.5rem;
          color: currentColor;
        }

        .nav-grid-text {
          font-size: 0.7rem;
          font-weight: 500;
          text-align: center;
          line-height: 1.2;
        }

        .nav-grid-active-indicator {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 6px;
          height: 6px;
          background: var(--bs-warning);
          border-radius: 50%;
        }

        /* Developer Signature */
        .dev-signature {
          height: 18px;
          transition: all 0.3s ease;
        }

        /* Consistent button styling */
        .btn-secondary {
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          box-shadow: 0 4px 15px rgba(13, 110, 253, 0.3);
        }

        /* Mobile menu backdrop */
        .mobile-nav-container {
          backdrop-filter: blur(10px);
          background: rgba(25, 135, 84, 0.98) !important;
        }
      `}</style>
    </motion.header>
  );
};

export default Navigation;

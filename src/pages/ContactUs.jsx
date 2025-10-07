import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactHeroVideo from "../assets/contact-hero-video.mp4"; // Add this video file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    location: "johannesburg",
  });

  const locations = {
    johannesburg: {
      name: "Johannesburg",
      address: "123 Medical Precinct, Sandton, Johannesburg, 2196",
      phone: "+27 11 123 4567",
      emergency: "+27 11 123 9111",
      email: "jhb@drmwamba.co.za",
      hours: {
        weekdays: "07:00 - 19:00",
        saturdays: "08:00 - 13:00",
        sundays: "09:00 - 12:00",
      },
    },
    middelburg: {
      name: "Middelburg",
      address: "456 Health Plaza, Middelburg CBD, Mpumalanga, 1050",
      phone: "+27 13 123 4567",
      emergency: "+27 13 123 9111",
      email: "mbg@drmwamba.co.za",
      hours: {
        weekdays: "07:30 - 18:00",
        saturdays: "08:00 - 12:00",
        sundays: "09:00 - 12:00",
      },
    },
    emalahleni: {
      name: "Emalahleni",
      address: "789 Wellness Center, Emalahleni Central, 1034",
      phone: "+27 13 123 4568",
      emergency: "+27 13 123 9112",
      email: "eml@drmwamba.co.za",
      hours: {
        weekdays: "08:00 - 17:00",
        saturdays: "09:00 - 12:00",
        sundays: "Emergency Only",
      },
    },
  };

  const contactMethods = [
    {
      icon: "bi-telephone",
      title: "Phone",
      description: "Speak directly with our staff",
      details: "Available during operating hours",
      action: "Call Now",
      link: `tel:${locations[formData.location].phone}`,
    },
    {
      icon: "bi-whatsapp",
      title: "WhatsApp",
      description: "Quick messaging for non-urgent queries",
      details: "24/7 response during business hours",
      action: "Message Us",
      link: `https://wa.me/${locations[formData.location].phone
        .replace("+", "")
        .replace(/\s/g, "")}`,
    },
    {
      icon: "bi-envelope",
      title: "Email",
      description: "Send detailed medical inquiries",
      details: "Response within 24 hours",
      action: "Send Email",
      link: `mailto:${locations[formData.location].email}`,
    },
    {
      icon: "bi-calendar-check",
      title: "Online Booking",
      description: "Schedule appointments instantly",
      details: "Available 24/7",
      action: "Book Online",
      link: "/hours",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll get back to you within 24 hours.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      location: "johannesburg",
    });
  };

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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section className="contact-page" style={{ overflowX: "hidden" }}>
      {/* Hero Section with Background Video */}
      <motion.div
        className="hero-section position-relative d-flex align-items-center justify-content-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          height: "60vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <video
          src={ContactHeroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-video"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
            zIndex: 1,
            aspectRatio: "16/9",
          }}
        />
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(25, 135, 84, 0.8) 0%, rgba(13, 110, 253, 0.7) 100%)",
            zIndex: 2,
          }}
        />
        <motion.div
          className="hero-content text-center text-white px-3"
          variants={itemVariants}
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "800px",
          }}
        >
          <motion.h1
            className="display-3 fw-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Dr. Mwamba
          </motion.h1>
          <motion.p
            className="lead mb-4 fs-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in Touch with Our Medical Team Across South Africa
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Emergency Banner */}
      <motion.div
        className="emergency-banner py-4 bg-warning"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div
            className="row align-items-center text-center text-md-start"
            variants={itemVariants}
          >
            <div className="col-md-8">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <i className="bi bi-exclamation-triangle-fill display-6 text-dark me-3"></i>
                <div>
                  <h4 className="text-dark mb-1">Medical Emergency?</h4>
                  <p className="text-dark mb-0">
                    Immediate assistance available 24/7
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
              <motion.a
                href="tel:112"
                className="btn btn-dark btn-lg px-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-telephone me-2"></i>
                Call 112 Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Methods */}
      <motion.div
        className="contact-methods py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h2 className="display-5 fw-bold text-primary mb-3">
              Ways to Reach Us
            </h2>
            <p className="lead text-muted">
              Choose the contact method that works best for you
            </p>
          </motion.div>

          <div className="row g-4">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="col-md-6 col-lg-3"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="contact-method-card card border-0 shadow-sm h-100 text-center"
                  whileHover="hover"
                >
                  <div className="card-body p-4">
                    <motion.div
                      className="method-icon bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: "80px", height: "80px" }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <i
                        className={`bi ${method.icon} text-primary`}
                        style={{ fontSize: "2rem" }}
                      ></i>
                    </motion.div>
                    <h5 className="card-title text-primary mb-3">
                      {method.title}
                    </h5>
                    <p className="card-text text-muted mb-3">
                      {method.description}
                    </p>
                    <p className="text-muted small mb-3">{method.details}</p>
                    <motion.a
                      href={method.link}
                      className="btn btn-outline-primary btn-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {method.action}
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Location Selection & Contact Form */}
      <motion.div
        className="contact-form-section py-5 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <div className="row g-5">
            {/* Location Information */}
            <motion.div className="col-lg-6" variants={itemVariants}>
              <h2 className="display-6 fw-bold text-primary mb-4">
                Our Locations
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="form-label text-primary fw-semibold"
                >
                  <i className="bi bi-geo me-2"></i>
                  Select Location
                </label>
                <select
                  id="location"
                  name="location"
                  className="form-select form-select-lg"
                  value={formData.location}
                  onChange={handleInputChange}
                >
                  {Object.entries(locations).map(([key, location]) => (
                    <option key={key} value={key}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>

              <motion.div
                className="location-info-card card border-0 shadow-sm"
                key={formData.location}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-body p-4">
                  <h4 className="text-primary mb-4">
                    {locations[formData.location].name}
                  </h4>

                  <div className="contact-details">
                    <div className="mb-3">
                      <h6 className="text-primary mb-2">
                        <i className="bi bi-geo me-2"></i>
                        Address
                      </h6>
                      <p className="text-muted mb-0">
                        {locations[formData.location].address}
                      </p>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-primary mb-2">
                        <i className="bi bi-telephone me-2"></i>
                        Phone
                      </h6>
                      <p className="text-muted mb-0">
                        {locations[formData.location].phone}
                      </p>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-primary mb-2">
                        <i className="bi bi-envelope me-2"></i>
                        Email
                      </h6>
                      <p className="text-muted mb-0">
                        {locations[formData.location].email}
                      </p>
                    </div>

                    <div className="mb-3">
                      <h6 className="text-primary mb-2">
                        <i className="bi bi-clock me-2"></i>
                        Operating Hours
                      </h6>
                      <div className="text-muted">
                        <div>
                          Mon-Fri: {locations[formData.location].hours.weekdays}
                        </div>
                        <div>
                          Sat: {locations[formData.location].hours.saturdays}
                        </div>
                        <div>
                          Sun: {locations[formData.location].hours.sundays}
                        </div>
                      </div>
                    </div>

                    <div className="emergency-contact mt-4 p-3 bg-danger bg-opacity-10 rounded">
                      <h6 className="text-danger mb-2">
                        <i className="bi bi-exclamation-triangle me-2"></i>
                        Emergency Contact
                      </h6>
                      <p className="text-danger mb-2 fw-bold">
                        {locations[formData.location].emergency}
                      </p>
                      <small className="text-muted">
                        Available 24/7 for urgent medical needs
                      </small>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="col-lg-6" variants={itemVariants}>
              <h2 className="display-6 fw-bold text-primary mb-4">
                Send Us a Message
              </h2>

              <div className="contact-form-card card border-0 shadow-sm">
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label
                          htmlFor="name"
                          className="form-label text-primary fw-semibold"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control form-control-lg"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="col-md-6">
                        <label
                          htmlFor="email"
                          className="form-label text-primary fw-semibold"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-control-lg"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="col-md-6">
                        <label
                          htmlFor="phone"
                          className="form-label text-primary fw-semibold"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-control form-control-lg"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+27 12 345 6789"
                        />
                      </div>

                      <div className="col-md-6">
                        <label
                          htmlFor="subject"
                          className="form-label text-primary fw-semibold"
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          className="form-select form-select-lg"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="general-inquiry">
                            General Inquiry
                          </option>
                          <option value="appointment-booking">
                            Appointment Booking
                          </option>
                          <option value="medical-advice">Medical Advice</option>
                          <option value="billing-query">Billing Query</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label
                          htmlFor="message"
                          className="form-label text-primary fw-semibold"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-control form-control-lg"
                          rows="5"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Please describe your inquiry in detail..."
                        ></textarea>
                      </div>

                      <div className="col-12">
                        <motion.button
                          type="submit"
                          className="btn btn-primary btn-lg w-100"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <i className="bi bi-send me-2"></i>
                          Send Message
                        </motion.button>
                      </div>
                    </div>
                  </form>

                  <div className="form-notice mt-4 p-3 bg-primary bg-opacity-10 rounded">
                    <h6 className="text-primary mb-2">
                      <i className="bi bi-info-circle me-2"></i>
                      Important Information
                    </h6>
                    <ul className="list-unstyled text-muted small mb-0">
                      <li>
                        • For medical emergencies, please call our emergency
                        line immediately
                      </li>
                      <li>
                        • We respond to all messages within 24 hours during
                        business days
                      </li>
                      <li>
                        • Please do not share sensitive medical information via
                        email
                      </li>
                      <li>
                        • For appointment bookings, include your preferred dates
                        and times
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Map & Directions Section */}
      <motion.div
        className="map-section py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h2 className="display-5 fw-bold text-primary mb-3">
              Find Our Locations
            </h2>
            <p className="lead text-muted">
              Conveniently located across Johannesburg, Middelburg, and
              Emalahleni
            </p>
          </motion.div>

          <motion.div className="row g-4" variants={containerVariants}>
            {Object.entries(locations).map(([key, location]) => (
              <motion.div
                key={key}
                className="col-md-4"
                variants={cardVariants}
              >
                <div className="map-card card border-0 shadow-sm h-100">
                  <div className="card-body p-4 text-center">
                    <div
                      className="map-placeholder bg-primary bg-opacity-10 rounded d-flex align-items-center justify-content-center mb-3"
                      style={{ height: "200px" }}
                    >
                      <div className="text-primary">
                        <i className="bi bi-map display-1 mb-2"></i>
                        <h6>{location.name}</h6>
                      </div>
                    </div>
                    <h5 className="text-primary mb-3">{location.name}</h5>
                    <p className="text-muted small mb-3">{location.address}</p>
                    <motion.a
                      href={`https://maps.google.com/?q=${location.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="bi bi-geo-alt me-2"></i>
                      Get Directions
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

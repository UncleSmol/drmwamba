import React, { useState } from "react";
import { motion } from "framer-motion";
import HoursHeroVideo from "../assets/hours-hero-video.mp4"; // Add this video file

const Hours = () => {
  const [selectedLocation, setSelectedLocation] = useState("johannesburg");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const locations = {
    johannesburg: {
      name: "Johannesburg",
      address: "123 Medical Precinct, Sandton, Johannesburg",
      phone: "+27 11 123 4567",
      email: "jhb@drmwamba.co.za",
      coordinates: "-26.107566, 28.056702",
    },
    middelburg: {
      name: "Middelburg",
      address: "456 Health Plaza, Middelburg CBD, Mpumalanga",
      phone: "+27 13 123 4567",
      email: "mbg@drmwamba.co.za",
      coordinates: "-25.775664, 29.464834",
    },
    emalahleni: {
      name: "Emalahleni",
      address: "789 Wellness Center, Emalahleni Central",
      phone: "+27 13 123 4568",
      email: "eml@drmwamba.co.za",
      coordinates: "-25.874969, 29.229759",
    },
  };

  const operatingHours = {
    weekdays: { open: "07:00", close: "19:00" },
    saturdays: { open: "08:00", close: "13:00" },
    sundays: { open: "09:00", close: "12:00" },
    publicHolidays: { open: "09:00", close: "12:00" },
  };

  const services = [
    "General Consultation",
    "Preventive Care Check-up",
    "Chronic Disease Management",
    "Health Screening",
    "Emergency Consultation",
    "Occupational Health Assessment",
    "Vaccination",
    "Follow-up Visit",
  ];

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];

  const publicHolidays = [
    "2024-01-01", // New Year's Day
    "2024-03-21", // Human Rights Day
    "2024-03-29", // Good Friday
    "2024-04-01", // Family Day
    "2024-04-27", // Freedom Day
    "2024-05-01", // Workers' Day
    "2024-06-16", // Youth Day
    "2024-08-09", // National Women's Day
    "2024-09-24", // Heritage Day
    "2024-12-16", // Day of Reconciliation
    "2024-12-25", // Christmas Day
    "2024-12-26", // Day of Goodwill
  ];

  const isPublicHoliday = (date) => {
    return publicHolidays.includes(date);
  };

  const getNextAvailableDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      // Skip Sundays and public holidays
      if (
        date.getDay() !== 0 &&
        !isPublicHoliday(date.toISOString().split("T")[0])
      ) {
        dates.push(date.toISOString().split("T")[0]);
      }
    }

    return dates;
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the appointment data to your backend
    console.log({
      location: locations[selectedLocation].name,
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
    });

    alert(
      `Appointment booked for ${selectedDate} at ${selectedTime} at ${locations[selectedLocation].name}`
    );
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
    <section className="hours-page" style={{ overflowX: "hidden" }}>
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
          src={HoursHeroVideo}
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
            Practice Hours & Scheduling
          </motion.h1>
          <motion.p
            className="lead mb-4 fs-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Convenient appointment booking across all our locations
          </motion.p>
          <motion.div
            className="d-flex gap-3 justify-content-center flex-wrap"
            variants={itemVariants}
          >
            <motion.button
              className="btn btn-light btn-lg px-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-telephone me-2"></i>
              Call to Book
            </motion.button>
            <motion.button
              className="btn btn-outline-light btn-lg px-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("booking-form")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <i className="bi bi-calendar-week me-2"></i>
              Book Online
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Operating Hours */}
      <motion.div
        className="operating-hours py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h2 className="display-5 fw-bold text-primary mb-3">
              Operating Hours
            </h2>
            <p className="lead text-muted">
              Extended hours to accommodate your busy schedule
            </p>
          </motion.div>

          <div className="row justify-content-center">
            <motion.div className="col-lg-8" variants={itemVariants}>
              <div className="hours-card card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="row text-center">
                    <div className="col-md-3 mb-4">
                      <div className="day-card p-3 rounded bg-white">
                        <i className="bi bi-calendar-week display-6 text-primary mb-3"></i>
                        <h5 className="text-primary">Weekdays</h5>
                        <p className="text-muted mb-2">Monday - Friday</p>
                        <strong className="text-dark">
                          {operatingHours.weekdays.open} -{" "}
                          {operatingHours.weekdays.close}
                        </strong>
                      </div>
                    </div>
                    <div className="col-md-3 mb-4">
                      <div className="day-card p-3 rounded bg-white">
                        <i className="bi bi-calendar-day display-6 text-primary mb-3"></i>
                        <h5 className="text-primary">Saturdays</h5>
                        <p className="text-muted mb-2">Saturday</p>
                        <strong className="text-dark">
                          {operatingHours.saturdays.open} -{" "}
                          {operatingHours.saturdays.close}
                        </strong>
                      </div>
                    </div>
                    <div className="col-md-3 mb-4">
                      <div className="day-card p-3 rounded bg-white">
                        <i className="bi bi-sun display-6 text-primary mb-3"></i>
                        <h5 className="text-primary">Sundays</h5>
                        <p className="text-muted mb-2">Sunday</p>
                        <strong className="text-dark">
                          {operatingHours.sundays.open} -{" "}
                          {operatingHours.sundays.close}
                        </strong>
                      </div>
                    </div>
                    <div className="col-md-3 mb-4">
                      <div className="day-card p-3 rounded bg-white">
                        <i className="bi bi-star display-6 text-primary mb-3"></i>
                        <h5 className="text-primary">Public Holidays</h5>
                        <p className="text-muted mb-2">Holiday Schedule</p>
                        <strong className="text-dark">
                          {operatingHours.publicHolidays.open} -{" "}
                          {operatingHours.publicHolidays.close}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="emergency-notice mt-4 p-4 bg-warning bg-opacity-10 rounded text-center">
                    <i className="bi bi-exclamation-triangle-fill text-warning display-6 mb-3"></i>
                    <h4 className="text-warning mb-3">
                      Emergency Services Available 24/7
                    </h4>
                    <p className="text-muted mb-3">
                      For medical emergencies outside operating hours, our
                      emergency line is always available.
                    </p>
                    <motion.a
                      href="tel:112"
                      className="btn btn-warning btn-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="bi bi-telephone me-2"></i>
                      Emergency: 112
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Location Selection */}
      <motion.div
        className="locations-section py-5 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h2 className="display-5 fw-bold text-primary mb-3">
              Our Locations
            </h2>
            <p className="lead text-muted">
              Select your preferred location for appointment booking
            </p>
          </motion.div>

          <div className="row g-4">
            {Object.entries(locations).map(([key, location]) => (
              <motion.div
                key={key}
                className="col-md-4"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div
                  className={`location-card card border-0 shadow-sm h-100 ${
                    selectedLocation === key ? "border-primary" : ""
                  }`}
                  whileHover="hover"
                  onClick={() => setSelectedLocation(key)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-body text-center p-4">
                    <motion.div
                      className="location-icon bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: "80px", height: "80px" }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <i
                        className="bi bi-geo-alt-fill text-primary"
                        style={{ fontSize: "2rem" }}
                      ></i>
                    </motion.div>
                    <h5 className="card-title text-primary mb-3">
                      {location.name}
                    </h5>
                    <div className="location-info text-muted">
                      <p className="mb-2">
                        <i className="bi bi-geo me-2"></i>
                        {location.address}
                      </p>
                      <p className="mb-2">
                        <i className="bi bi-telephone me-2"></i>
                        {location.phone}
                      </p>
                      <p className="mb-0">
                        <i className="bi bi-envelope me-2"></i>
                        {location.email}
                      </p>
                    </div>
                    <motion.button
                      className="btn btn-outline-primary btn-sm mt-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="bi bi-map me-2"></i>
                      Get Directions
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Appointment Booking Form */}
      <motion.div
        id="booking-form"
        className="booking-section py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h2 className="display-5 fw-bold text-primary mb-3">
              Book Your Appointment
            </h2>
            <p className="lead text-muted">
              Secure your preferred time slot in just a few clicks
            </p>
          </motion.div>

          <motion.div
            className="row justify-content-center"
            variants={itemVariants}
          >
            <div className="col-lg-8">
              <div className="booking-card card border-0 shadow-sm">
                <div className="card-body p-4">
                  <form onSubmit={handleAppointmentSubmit}>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <label
                          htmlFor="location"
                          className="form-label text-primary fw-semibold"
                        >
                          <i className="bi bi-geo me-2"></i>
                          Preferred Location
                        </label>
                        <select
                          id="location"
                          className="form-select form-select-lg"
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          required
                        >
                          {Object.entries(locations).map(([key, location]) => (
                            <option key={key} value={key}>
                              {location.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label
                          htmlFor="service"
                          className="form-label text-primary fw-semibold"
                        >
                          <i className="bi bi-heart-pulse me-2"></i>
                          Service Required
                        </label>
                        <select
                          id="service"
                          className="form-select form-select-lg"
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label
                          htmlFor="date"
                          className="form-label text-primary fw-semibold"
                        >
                          <i className="bi bi-calendar me-2"></i>
                          Preferred Date
                        </label>
                        <select
                          id="date"
                          className="form-select form-select-lg"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          required
                        >
                          <option value="">Select a date</option>
                          {getNextAvailableDates().map((date) => (
                            <option key={date} value={date}>
                              {new Date(date).toLocaleDateString("en-ZA", {
                                weekday: "short",
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label
                          htmlFor="time"
                          className="form-label text-primary fw-semibold"
                        >
                          <i className="bi bi-clock me-2"></i>
                          Preferred Time
                        </label>
                        <select
                          id="time"
                          className="form-select form-select-lg"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          required
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-12">
                        <motion.button
                          type="submit"
                          className="btn btn-primary btn-lg w-100"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={
                            !selectedLocation ||
                            !selectedService ||
                            !selectedDate ||
                            !selectedTime
                          }
                        >
                          <i className="bi bi-calendar-check me-2"></i>
                          Confirm Appointment
                        </motion.button>
                      </div>
                    </div>
                  </form>

                  <div className="booking-info mt-4 p-3 bg-primary bg-opacity-10 rounded">
                    <h6 className="text-primary mb-2">
                      <i className="bi bi-info-circle me-2"></i>
                      Booking Information
                    </h6>
                    <ul className="list-unstyled text-muted small mb-0">
                      <li>• Same-day appointments available for emergencies</li>
                      <li>• 24-hour cancellation notice required</li>
                      <li>
                        • Please arrive 15 minutes before your appointment
                      </li>
                      <li>• Bring your ID and medical aid card</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        className="contact-section py-5 bg-primary text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container text-center">
          <motion.div variants={itemVariants}>
            <h2 className="display-5 fw-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="lead mb-4 opacity-75">
              Our team is ready to help you with any questions or urgent medical
              needs
            </p>
            <div className="row g-4">
              <div className="col-md-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <i className="bi bi-telephone display-4 text-warning mb-3"></i>
                  <h5>Phone Booking</h5>
                  <p className="opacity-75">Call during operating hours</p>
                  <strong>{locations[selectedLocation].phone}</strong>
                </motion.div>
              </div>
              <div className="col-md-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <i className="bi bi-envelope display-4 text-warning mb-3"></i>
                  <h5>Email Booking</h5>
                  <p className="opacity-75">Send us your request</p>
                  <strong>{locations[selectedLocation].email}</strong>
                </motion.div>
              </div>
              <div className="col-md-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <i className="bi bi-whatsapp display-4 text-warning mb-3"></i>
                  <h5>WhatsApp</h5>
                  <p className="opacity-75">Quick message booking</p>
                  <strong>{locations[selectedLocation].phone}</strong>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hours;

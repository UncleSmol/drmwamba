import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Homepage from "./pages/Home";
import AboutUs from "./pages/About";
import Services from "./pages/Services";
import Hours from "./pages/Hours";
import Contact from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/hours" element={<Hours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

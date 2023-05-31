import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./Home"
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import ServiceDetails from "./ServiceDetails";


const Router = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
          {/* <Link to="/servicedetails">Services Details</Link> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default Router
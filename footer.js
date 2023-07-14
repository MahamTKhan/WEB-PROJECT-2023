import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from "react-router-dom";
import './footer.css';

function WhatsApp() {
    const navigate = useNavigate();
  
    const whatsappNumber = "mynumber";
    const url = `https://wa.me/${whatsappNumber}`;
  
  
    const navigateToWhatsApp = () => {
      window.open(url, "_blank");
      navigate("/");
    };
  
    navigateToWhatsApp(); 
    return null;
  }
  
  function Instagram() {
    const navigate = useNavigate();
  
  
    const instagramUsername = "myid";
    const url = `https://www.instagram.com/${instagramUsername}`;
  
 
    const navigateToInstagram = () => {
      window.open(url, "_blank");
      navigate("/");
    };
  
    navigateToInstagram(); 
    return null;
  }
  
  function Facebook() {
    const navigate = useNavigate();
  
   
    const facebookUsername = "myid";
    const url = `https://www.facebook.com/${facebookUsername}`;
  
  
    const navigateToFacebook = () => {
      window.open(url, "_blank");
      navigate("/");
    };
  
    navigateToFacebook(); 
    return null;
  }
function Footer() {
  return (
    <Router>
      <footer className="footer">
        <div className="footer-container">
          <div className="row">
            <div className="footer-col">
              <h4>Eyestistic</h4>
              <ul>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Need Help?</h4>
              <ul>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/shipping">Shipping</Link></li>
                <li><Link to="/return">Return Policy</Link></li>
                <li><Link to="/others">Others</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Connect with us</h4>
              <div className="sociallinks">
                <Link to="/facebook">
                  <FaFacebook size={30} color="Blue" />
                </Link>
                <Link to="/instagram">
                  <FaInstagram size={30} color="purple" />
                </Link>
                <Link to="/whatsapp">
                  <FaWhatsapp size={30} color="green" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Routes>
        <Route path="/whatsapp" element={<WhatsApp />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/facebook" element={<Facebook />} />
     
      </Routes>
    </Router>
  );
}

export default Footer;

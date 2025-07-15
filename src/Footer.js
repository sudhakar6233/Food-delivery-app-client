// Footer.js
import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
  FaApple,
  FaGooglePlay,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa6";
import "./Footer.css"; 

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Company */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Eternal</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">FoodExpress</a></li>
              <li><a href="/" className="footer-link">QuickBite</a></li>
              <li><a href="/" className="footer-link">DineOut</a></li>
              <li><a href="/" className="footer-link">HyperFresh</a></li>
              <li><a href="/" className="footer-link">Feeding Hearts</a></li>
              <li><a href="/" className="footer-link">Investor Relations</a></li>
              <li><a href="/" className="footer-link">Careers</a></li>
              <li><a href="/" className="footer-link">Press</a></li>
            </ul>
          </div>

          {/* For Restaurants */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">For Restaurants</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Partner With Us</a></li>
              <li><a href="/" className="footer-link">Apps For You</a></li>
              <li><a href="/" className="footer-link">Restaurant Signup</a></li>
            </ul>
          </div>

          {/* For Delivery Partners */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">For Delivery Partners</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Partner With Us</a></li>
              <li><a href="/" className="footer-link">Apps For You</a></li>
              <li><a href="/" className="footer-link">Delivery Partner Signup</a></li>
            </ul>
          </div>

          {/* Learn More */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Learn More</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Privacy</a></li>
              <li><a href="/" className="footer-link">Security</a></li>
              <li><a href="/" className="footer-link">Terms of Service</a></li>
              <li><a href="/" className="footer-link">Help & Support</a></li>
              <li><a href="/" className="footer-link">Report a Fraud</a></li>
              <li><a href="/" className="footer-link">Blog</a></li>
              <li><a href="/" className="footer-link">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Social icons and store buttons */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
          <div className="mb-3 mb-md-0">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2"><FaLinkedin /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2"><FaInstagram /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2"><FaYoutube /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2"><FaXTwitter /></a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2"><FaPinterestP /></a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2"><FaTiktok /></a>
          </div>
          <div>
            <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer" className="store-btn mx-2">
              <FaApple className="me-1" /> App Store
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="store-btn mx-2">
              <FaGooglePlay className="me-1" /> Google Play
            </a>
          </div>
        </div>
        <hr className="bg-secondary mt-4" />
        <p className="text-center mb-0 small">
          By continuing past this page, you agree to our Terms of Service, Cookie Policy,
          Privacy Policy and Content Policies.<br />
          2025 &copy; FoodExpress™ Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

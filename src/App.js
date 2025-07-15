import React, { useState, useRef, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FiHome, FiEdit3, FiMenu, FiMail, FiShoppingCart, FiUser } from 'react-icons/fi';
import Home from "./Home";
import CrudPage from './CrudPage';
import Menu from "./Menu";
import Contact from "./Contact";
import Login from "./Login";
import Footer from "./Footer";
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartRef = useRef(null);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg custom-navbar shadow-sm fixed-top">
          <div className="container">
            <Link to="/" className="navbar-brand brand-logo">
              🍔 QuickBite
            </Link>

            <button
              className={`navbar-toggler ${menuOpen ? "open" : ""}`}
              type="button"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <div className="toggler-icon"></div>
            </button>

            <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                  <Link to="/" className="nav-link nav-link-custom" onClick={() => setMenuOpen(false)}>
                    <FiHome className="me-1" /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/crud" className="nav-link nav-link-custom" onClick={() => setMenuOpen(false)}>
                    <FiEdit3 className="me-1" /> Manage Foods
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu" className="nav-link nav-link-custom" onClick={() => setMenuOpen(false)}>
                    <FiMenu className="me-1" /> Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link nav-link-custom" onClick={() => setMenuOpen(false)}>
                    <FiMail className="me-1" /> Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link nav-link-custom" onClick={() => setMenuOpen(false)}>
                    <FiUser className="me-1" /> Login
                  </Link>
                </li>

                <li className="nav-item position-relative" ref={cartRef}>
                  <button
                    className="btn nav-link nav-link-custom position-relative"
                    onClick={toggleCart}
                    style={{ background: "none", border: "none" }}
                  >
                    <FiShoppingCart className="me-1" /> Cart
                    {cartItems.length >0  && (
                      <span className="badge bg-danger rounded-circle position-absolute top- start-10 translate-middle mt-2">
                        {cartItems.length}
                      </span>
                    )}
                  </button>

                  {showCart && (
                    <div className="dropdown-menu dropdown-menu-end show p-3 shadow" style={{ minWidth: "250px" }}>
                      <h6 className="dropdown-header">🛒 Your Orders</h6>
                      {cartItems.length === 0 ? (
                        <span className="dropdown-item-text">No items in cart.</span>
                      ) : (
                        <>
                          {cartItems.map((item, index) => (
                            <div key={index} className="dropdown-item-text small mb-2">
                              <strong>{item.title || item.name}</strong><br />
                              ₹{item.price}
                            </div>
                          ))}
                          <div className="dropdown-divider"></div>
                          <div className="dropdown-item-text fw-bold">
                            Total: ₹{totalAmount}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="content-wrapper pt-5">
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/crud" element={<CrudPage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

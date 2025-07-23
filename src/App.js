// App.js
import React, { useState, useRef, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {
  FiHome,
  FiEdit3,
  FiMenu,
  FiMail,
  FiShoppingCart,
  FiUser,
  FiPlus,
  FiMinus
} from 'react-icons/fi';

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
    const existingIndex = cartItems.findIndex(cartItem => cartItem.title === item.title);
    if (existingIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[existingIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const toggleCart = () => setShowCart(!showCart);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const increaseQty = (index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity += 1;
    setCartItems(updatedItems);
  };

  const decreaseQty = (index) => {
    const updatedItems = [...cartItems];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
    } else {
      updatedItems.splice(index, 1);
    }
    setCartItems(updatedItems);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setShowCart(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm custom-navbar">
          <div className="container">
            <Link to="/" className="navbar-brand">🍔 QuickBite</Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
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
                  <button className="btn nav-link nav-link-custom position-relative text-white" onClick={toggleCart}>
                    <FiShoppingCart className="me-1" /> Cart
                    {cartItems.length > 0 && (
                      <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle">
                        {cartItems.length}
                      </span>
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="content-wrapper pt-5 mt-4">
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/crud" element={<CrudPage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        {/* Cart Modal */}
        {showCart && (
          <div className="cart-modal-overlay">
            <div className="cart-modal card-view p-4">
              <h5 className="text-center mb-3">🛒 Your Cart</h5>
              {cartItems.length === 0 ? (
                <p className="text-center">No items in cart.</p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="card mb-3 shadow-sm p-2">
                    <div className="row g-2 align-items-center">
                      <div className="col-3 text-center">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="img-fluid rounded"
                          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-6">
                        <h6 className="mb-1">{item.title}</h6>
                        <p className="mb-1 text-muted small">{item.desc}</p>
                        <p className="mb-1 fw-semibold">₹{item.price}</p>
                      </div>
                      <div className="col-3 d-flex flex-column align-items-center justify-content-center gap-2">
                        <button
                          className="btn btn-outline-success btn-sm w-100"
                          onClick={() => increaseQty(index)}
                        >
                          <FiPlus />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="btn btn-outline-danger btn-sm w-100"
                          onClick={() => decreaseQty(index)}
                        >
                          <FiMinus />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
              {cartItems.length > 0 && (
                <>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <strong>Total:</strong>
                    <strong>₹{totalAmount}</strong>
                  </div>
                </>
              )}
              <button
                className="btn btn-secondary mt-3 w-100 rounded-pill"
                onClick={() => setShowCart(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Router>
  );
}

export default App;

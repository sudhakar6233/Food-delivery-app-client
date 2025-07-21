import React, { useState } from "react";
import img1 from "./assets/img3.png";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img1.jpg";
import cardImg1 from "./assets/card1.jpg";
import cardImg2 from "./assets/card2.jpg";
import cardImg3 from "./assets/card3.jpg";
import cardImg4 from "./assets/card4.jpg";
import cardImg5 from "./assets/card5.jpg";
import cardImg6 from "./assets/card6.jpg";
import googlePlay from "./assets/google-play.png";
import appStore from "./assets/app-store.png";
import phoneMockup from "./assets/phone-frame.png";
import EasyToOrderImg from "./assets/order icon.png";
import FastestDeliveryImg from "./assets/delivery1.png";
import BestQualityImg from "./assets/buy icon1.png";
import { FiEye } from "react-icons/fi";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";

function Home({ onAddToCart }) {
  const cards = [
    {
      img: cardImg1,
      title: "Egg Salad",
      desc: "A healthy mix of eggs, veggies, and herbs.",
      price: 120,
      eta: "20-25 mins",
      rating: 4.5,
    },
    {
      img: cardImg2,
      title: "Veggie Delight",
      desc: "Fresh veggies with delicious dressing recipe.",
      price: 150,
      eta: "15-20 mins",
      rating: 4.7,
    },
    {
      img: cardImg3,
      title: "Chicken Wrap",
      desc: "Juicy chicken wrapped in fresh flatbread.",
      price: 200,
      eta: "25-30 mins",
      rating: 4.6,
    },
    {
      img: cardImg4,
      title: "Pasta Bowl",
      desc: "Creamy pasta with fresh herbs and cheese.",
      price: 180,
      eta: "20-25 mins",
      rating: 4.4,
    },
    {
      img: cardImg5,
      title: "Grilled Sandwich",
      desc: "Toasted sandwich filled with veggies & cheese.",
      price: 100,
      eta: "15-20 mins",
      rating: 4.2,
    },
    {
      img: cardImg6,
      title: "Fruit Salad",
      desc: "Seasonal fruits served fresh and chilled Veg.",
      price: 90,
      eta: "10-15 mins",
      rating: 4.8,
    },
  ];

  const [showDetails, setShowDetails] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="container-fluid p-0">
      <h1 className="text-center mb-4 mt-4 food-heading animate-hero">
        Delicious Meals Delivered Fast!
      </h1>

      {/* ✅ Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        style={{ width: "100%", height: "500px", overflow: "hidden" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner" style={{ width: "100%", height: "100%" }}>
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              alt="Slide 3"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ✅ Card Section */}
      <div className="container mt-5" id="menu">
<h2 className="hero-heading">Hot Deals Today!</h2>
<p className="hero-subheading">Order Your Favourite Food in Minutes!</p>
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden card-hover">
                <img
                  src={card.img}
                  className="card-img-top"
                  alt={card.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{card.title}</h5>
                  <p className="card-text text-muted">{card.desc}</p>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-semibold text-success">₹{card.price}</span>
                    <span className="badge bg-warning text-dark">⭐ {card.rating}</span>
                  </div>
                  <p className="text-secondary small mb-3">ETA: {card.eta}</p>
                  <div className="d-flex gap-2 mt-auto">
                    <button
                      className="btn btn-success flex-fill rounded-pill btn-hover"
                      onClick={() => {
                        setSelectedCard(card);
                        setShowDetails(true);
                      }}
                    >
                      <FiEye className="me-2" />
                      View Details
                    </button>
                    <button
                      className="btn btn-success flex-fill rounded-pill btn-hover"
                      onClick={() => onAddToCart(card)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal */}
      {showDetails && selectedCard && (
        <div className="modal d-block bg-dark bg-opacity-50" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title">{selectedCard.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDetails(false)}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedCard.img}
                  alt={selectedCard.title}
                  className="img-fluid rounded mb-3"
                  style={{ objectFit: "cover", height: "200px", width: "100%" }}
                />
                <p>{selectedCard.desc}</p>
                <p><strong>Price:</strong> ₹{selectedCard.price}</p>
                <p><strong>ETA:</strong> {selectedCard.eta}</p>
                <p><strong>Rating:</strong> ⭐ {selectedCard.rating}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-success rounded-pill"
                  onClick={() => {
                    onAddToCart(selectedCard);
                    setShowDetails(false);
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="btn btn-secondary rounded-pill"
                  onClick={() => setShowDetails(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    {/*  delivery section  */}
       <section className="what-we-serve">
      <h4 className="subtitle">How It Works</h4>
      <h2 className="title">What We Serve</h2>
      <p className="description">
        Product Quality Is Our Priority, And Always Guarantees Freshness And Safety Until It Is In Your Hands
      </p>

      <div className="services">
        <div className="service-card">
          <img
            src={EasyToOrderImg}
            alt="Easy To Order"
            className="service-image"
          />
          <h3>Easy To Order</h3>
          <p>You only order through the app</p>
        </div>

        <div className="service-card">
          <img
            src={FastestDeliveryImg}
            alt="Fastest Delivery"
            className="service-image"
          />
          <h3>Fastest Delivery</h3>
          <p>Delivery will be on time</p>
        </div>

        <div className="service-card">
          <img
            src={BestQualityImg}
            alt="Best Quality"
            className="service-image"
          />
          <h3>Best Quality</h3>
          <p>The best quality of food for you</p>
        </div>
      </div>
    </section>
       {/* ✅ Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <img src={phoneMockup} alt="Phone Mockup" className="phone" />
        </div>
        <div className="hero-text">
          <h1>Download the app now!</h1>
          <p>Experience seamless online ordering only on our food delivery app.</p>
          <div className="store-buttons">
            <img src={googlePlay} alt="Google Play Store" />
            <img src={appStore} alt="App Store" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;

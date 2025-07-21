import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import foodBanner from "./assets/foodBanner.jpg"; // Images
import food1 from "./assets/food1.jpg";
import food2 from "./assets/food2.jpg";
import food3 from "./assets/food3.jpg";
import food4 from "./assets/food4.jpg";
import food5 from "./assets/food5.jpg";
import food6 from "./assets/food6.jpg";
import food7 from "./assets/food7.jpg";
import food8 from "./assets/food8.jpg";
import food9 from "./assets/food9.jpg";
import food10 from "./assets/food10.jpg";
import food11 from "./assets/food11.jpg";
import food12 from "./assets/food12.jpg";

const foodItems = [
  { id: 1, name: "Margherita Pizza", description: "Mozzarella & basil", price: "120", image: food1 },
  { id: 2, name: "Veggie Burger", description: "Grilled veggie patty", price: "140", image: food2 },
  { id: 3, name: "Pasta Alfredo", description: "Creamy Alfredo sauce", price: "110", image: food3 },
  { id: 4, name: "Grilled Sandwich", description: "Veggies and cheese", price: "80", image: food4 },
  { id: 5, name: "Caesar Salad", description: "Fresh lettuce, parmesan", price: "90", image: food5 },
  { id: 6, name: "Chicken Wings", description: "Crispy wings, tangy sauce", price: "120", image: food6 },
  { id: 7, name: "Beef Taco", description: "Soft taco, seasoned beef", price: "160", image: food7 },
  { id: 8, name: "Fruit Bowl", description: "Mixed seasonal fruits", price: "140", image: food8 },
  { id: 9, name: "French Fries", description: "Golden crispy fries", price: "170", image: food9 },
  { id: 10, name: "Chocolate Muffin", description: "Rich muffin with choco chips", price: "110", image: food10 },
  { id: 11, name: "Greek Salad", description: "Feta cheese, olives", price: "190", image: food11 },
  { id: 12, name: "Cheese Pizza", description: "Extra cheesy delight", price: "100", image: food12 },
];

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    pincode: "",
    phone: "",
    amount: "",
  });

  const navigate = useNavigate();

  const handleBuyNow = () => {
    setAddress({
      ...address,
      amount: selectedItem.price,
    });
    setShowAddressForm(true);
  };

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://food-delivery-app-server-1.onrender.com/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: address.name,
          street: address.street,
          city: address.city,
          pincode: address.pincode,
          phone: address.phone,
          product: selectedItem.name,
          description: selectedItem.description,
          price: address.amount,
        }),
      });
      if (response.ok) {
        alert("Your payment was successful!");
        setPaymentSuccess(true);
      } else {
        alert("Error saving order. Try again!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShowAddressForm(false);
    setPaymentSuccess(false);
    setAddress({
      name: "",
      street: "",
      city: "",
      pincode: "",
      phone: "",
      amount: "",
    });
  };

  return (
    <div className="menu-container">
      <h2 className="section-title">🔥 Fresh Orders</h2>
      <div className="menu-grid">
        {foodItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="card-footer">
                <span className="price">Rs {item.price}.00</span>
                <button className="add-btn" onClick={() => setSelectedItem(item)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            {!paymentSuccess && !showAddressForm && (
              <>
                <h2>{selectedItem.name}</h2>
                <img src={selectedItem.image} alt={selectedItem.name} className="modal-image" />
                <p>{selectedItem.description}</p>
                <p>Price: Rs {selectedItem.price}.00</p>
                <button className="primary-btn" onClick={handleBuyNow}>Buy Now</button>
                <button className="secondary-btn" onClick={closeModal}>Close</button>
              </>
            )}

            {!paymentSuccess && showAddressForm && (
              <>
                <h2>📝 Enter Delivery Details</h2>
                <form onSubmit={handleAddressSubmit} className="address-form">
                  <input type="text" name="name" placeholder="Name" value={address.name} onChange={handleAddressChange} required />
                  <input type="text" name="street" placeholder="Street Address" value={address.street} onChange={handleAddressChange} required />
                  <input type="text" name="city" placeholder="City" value={address.city} onChange={handleAddressChange} required />
                  <input type="text" name="pincode" placeholder="Pincode" value={address.pincode} onChange={handleAddressChange} required />
                  <input type="text" name="phone" placeholder="Phone Number" value={address.phone} onChange={handleAddressChange} required />
                  <input type="text" name="amount" placeholder="Amount" value={address.amount} readOnly />
                  <button type="submit" className="primary-btn">Submit & Pay</button>
                  <button type="button" className="secondary-btn" onClick={closeModal}>Cancel</button>
                </form>
              </>
            )}

            {paymentSuccess && (
              <>
                <h2>✅ Payment Successful!</h2>
                <img src={selectedItem.image} alt={selectedItem.name} className="modal-image" />
                <p><strong>{selectedItem.name}</strong> order confirmed.</p>
                <p>Amount Paid: Rs {address.amount}.00</p>
                <div className="address-view">
                  <h4>Delivery To:</h4>
                  <p>
                    {address.name}<br />
                    {address.street}, {address.city} - {address.pincode}<br />
                    📞 {address.phone}
                  </p>
                </div>
                <button className="primary-btn" onClick={closeModal}>Close</button>
              </>
            )}
          </div>
        </div>
      )}

      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            Join Our Membership And Get <br />
            Discount Up To <span className="hero-highlight">50%</span>
          </h1>
          <button className="hero-btn" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>
        <img src={foodBanner} alt="Food Banner" className="hero-background" />
      </section>
    </div>
  );
};

export default Menu;

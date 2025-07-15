import React, { useState, useEffect } from "react";
import "./Contact.css";
import bgImage from "./assets/login.jpg"; 

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !about) {
      alert("Please fill all fields!");
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, about }),
      });
      if (response.ok) {
        alert("✅ Saved and email sent successfully!");
        setName("");
        setEmail("");
        setPassword("");
        setAbout("order issue, technical support, general inquiry");
      } else {
        const data = await response.json();
        alert(`❌ Error: ${data.message || "Something went wrong!"}`);
      }
    } catch (error) {
      console.error("Server Error:", error);
      alert("❌ Server error! Check your backend.");
    }
  };

  return (
    <div
      className={`contact-container ${loaded ? "fade-in" : ""}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="overlay">
        <h2>Contact / Register</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="password-label">
            Password
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-eye"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer", marginLeft: "8px" }}
                title="Show/Hide Password"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </label>
          <label>
            About
            <textarea
              placeholder="order issue, technical support, general inquiry"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

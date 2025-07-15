import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Hardcoded sample credentials
  const SAMPLE_EMAIL = "user@demo.com";
  const SAMPLE_PASSWORD = "mypassword";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === SAMPLE_EMAIL && password === SAMPLE_PASSWORD) {
      alert("✅ Login successful! Welcome to QuickBite!");
      navigate("/");
    } else {
      alert("❌ Wrong Email or Password!\nTry: user@demo.com / mypassword");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form shadow" onSubmit={handleSubmit}>
        <h2>🍕 QuickBite Login</h2>
        <div className="input-group">
          <label>Email ID</label>
          <input
            type="email"
            placeholder="user@demo.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="mypassword"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

        <p className="login-hint">
          <strong>Sample:</strong> user@demo.com / mypassword
        </p>
      </form>
    </div>
  );
}

export default Login;

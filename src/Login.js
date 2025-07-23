import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SAMPLE_EMAIL = "user@demo.com";
  const SAMPLE_PASSWORD = "mypassword";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    if (isLogin) {
      // LOGIN
      if (email === SAMPLE_EMAIL && password === SAMPLE_PASSWORD) {
        alert("✅ Login successful! Welcome to QuickBite!");
        navigate("/");
      } else {
        alert("❌ Wrong Email or Password!\nTry: user@demo.com / mypassword");
      }
    } else {
      // SIGNUP (you can enhance this to store new users)
      alert("✅ Signup successful! Please log in.");
      setIsLogin(true); // Switch to login after signup
    }
  };

  return (
    <div className="login-container">
      <form className="login-form shadow" onSubmit={handleSubmit}>
        <h2>{isLogin ? "🔐 QuickBite Login" : "📝 QuickBite Signup"}</h2>

        <div className="input-group">
          <label>Email ID</label>
          <input
            type="email"
            placeholder="user@demo.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="mypassword"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-btn">
          {isLogin ? "Login" : "Sign Up"}
        </button>

        {isLogin && (
          <p className="login-hint">
            <strong>Sample:</strong> user@demo.com / mypassword
          </p>
        )}

        <p className="toggle-msg">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;

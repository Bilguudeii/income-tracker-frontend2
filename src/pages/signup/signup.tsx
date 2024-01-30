import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="Main">
        <div>
          <button className="nuurniital"></button>
        </div>
        <div className="login-form">
          <h3>Welcome Back</h3>
          <p>Welcome back, Please enter your details</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log in</button>
          <p>
            Dont have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

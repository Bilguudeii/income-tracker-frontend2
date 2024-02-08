import React, { useState } from "react";
import { GeldIcon } from "../Icons/Geld";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email: string, password: string) => {
    const res = await axios.post("http://localhost:8080/login", {
      email: email,
      password: password,
    });
    console.log(res);
    if (res.status === 200) {
      localStorage.setItem("user", "true");
      localStorage.setItem("userId", JSON.stringify(res.data._id));
    }
    router.push("/");
  };

  return (
    <>
      <div className="Main">
        <div className="login-form">
          <GeldIcon />
          <h3 className="ngdehug">Welcome Back</h3>
          <p className="hoyrdhUg">Welcome back, Please enter your details</p>
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
          <button
            type="submit"
            onClick={() => {
              loginUser(email, password).catch((error) => {
                console.error("Failed to log in:", error);
              });
            }}
          >
            Log in
          </button>

          <p>
            Dont have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
        <div className="nuurniital"></div>
      </div>
    </>
  );
};

export default Login;

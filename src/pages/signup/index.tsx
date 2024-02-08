import React, { useState } from "react";
import axios from "axios";
import { GeldIcon } from "../Icons/Geld";
import { useRouter } from "next/router";


const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState("");
  const router = useRouter();

  const createUser = async () => {
    const res = await axios.post("http://localhost:8080/signup", {
      username,
      email,
      password,
    });
    console.log({res});
    router.push("/login");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== rePassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await createUser();
      alert("User created successfully!");
    } catch (error) {
      console.error(error);
      alert("Error creating user. Please try again.");
    }
  };

  return (
    <div className="Main">
      <div className="login-form">
        <GeldIcon />
        <h3 className="ngdehug">Create Geld account</h3>
        <p className="hoyrdhUg">Sign up below to create your Wallet account</p>
        <div
          onSubmit={handleSubmit}
          className="aaaaD"
        >
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Re-enter Password"
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <button onClick={createUser}>Sign Up</button>
        </div>
        <p className="text-center text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:text-blue-700">
            Log in
          </a>
        </p>
      </div>
      <div className="nuurniital"></div>
    </div>
  );
};

export default SignUpForm;

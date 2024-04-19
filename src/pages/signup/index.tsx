import React, { useState } from "react"
import axios from "axios"
import { GeldIcon } from "../Icons/Geld"
import { useRouter } from "next/router"
import { Box, Button, TextField } from "@mui/material"

const SignUpForm = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [rePasswordError, setRePasswordError] = useState("")
  const router = useRouter()

  const createUser = async () => {
    const res = await axios.post(
      "https://income-tracker-backend-15ch.onrender.com/signup",
      {
        username,
        email,
        password,
      }
    )
    router.push("/login")
    console.log(res)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (username.length < 4) {
      setUsernameError("Username must be at least 4 characters long")
      return
    } else {
      setUsernameError("")
    }

    if (!email.includes("@")) {
      setEmailError("Please enter a valid email address")
      return
    } else {
      setEmailError("")
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long")
      return
    } else {
      setPasswordError("")
    }

    if (password !== rePassword) {
      setRePasswordError("Passwords do not match")
      return
    } else {
      setRePasswordError("")
    }

    try {
      await createUser()
      alert("Your account has been created successfully!")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box className="Main">
      <Box className="login-form">
        <GeldIcon />
        <h3 className="ngdehug">Create Geld account</h3>
        <Box className="hoyrdhUg">
          Sign up below to create your Wallet account
        </Box>
        <form onSubmit={handleSubmit} className="aaaaD">
          <TextField
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <div className="error">{usernameError}</div>}
          <TextField
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="error">{emailError}</div>}
          <TextField
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <div className="error">{passwordError}</div>}
          <TextField
            placeholder="Re-enter Password"
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          {rePasswordError && <div className="error">{rePasswordError}</div>}
          <Button type="submit">Sign Up</Button>
        </form>
        <Box className="text-center text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:text-blue-700">
            Log in
          </a>
        </Box>
      </Box>
      <Box className="nuurniital"></Box>
    </Box>
  )
}

export default SignUpForm

import React, { useState } from "react"
import { GeldIcon } from "../Icons/Geld"
import axios from "axios"
import { useRouter } from "next/router"
import { Box, Button, TextField } from "@mui/material"

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const loginUser = async (email: string, password: string) => {
    try {
      const res = await axios.post(
        "https://income-tracker-backend-15ch.onrender.com/login",
        {
          email: email,
          password: password,
        }
      )
      if (res.status === 200) {
        localStorage.setItem("user", "true")
        localStorage.setItem("userId", res.data._id)
        router.push("/")
      }
    } catch (error) {
      setError("Invalid email or password")
      console.error("Failed to log in:", error)
    }
  }

  return (
    <>
      <Box className="Main">
        <Box className="login-form">
          <GeldIcon />
          <h3 className="ngdehug">Welcome Back</h3>
          <p className="hoyrdhUg">Welcome back, Please enter your details</p>
          {error && <div className="error">{error}</div>}
          <TextField
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" onClick={() => loginUser(email, password)}>
            Log in
          </Button>
          <Box>
            Don't have an account? <a href="/signup">Sign up</a>
          </Box>
        </Box>
        <Box className="nuurniital"></Box>
      </Box>
    </>
  )
}

export default Login

import React, { useState } from "react"
import { GeldIcon } from "../Icons/Geld"
import axios from "axios"
import { useRouter } from "next/router"
import { Box, Button, TextField } from "@mui/material"

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginUser = async (email: string, password: string) => {
    const res = await axios.post("http://localhost:8080/login", {
      email: email,
      password: password,
    })
    if (res.status === 200) {
      localStorage.setItem("user", "true")
      localStorage.setItem("userId", res.data._id)
    }
    router.push("/")
  }

  return (
    <>
      <Box className="Main">
        <Box className="login-form">
          <GeldIcon />
          <h3 className="ngdehug">Welcome Back</h3>
          <p className="hoyrdhUg">Welcome back, Please enter your details</p>
          <TextField
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            onClick={() => {
              loginUser(email, password).catch((error) => {
                console.error("Failed to log in:", error)
              })
            }}
          >
            Log in
          </Button>

          <Box>
            Dont have an account? <a href="/signup">Sign up</a>
          </Box>
        </Box>
        <Box className="nuurniital"></Box>
      </Box>
    </>
  )
}

export default Login

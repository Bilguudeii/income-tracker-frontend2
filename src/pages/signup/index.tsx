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
  const router = useRouter()

  const createUser = async () => {
    const res = await axios.post("http://localhost:8080/signup", {
      username,
      email,
      password,
    })
    router.push("/login")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== rePassword) {
      alert("Passwords do not match")
      return
    }
    try {
      await createUser()
      alert("User created successfully!")
    } catch (error) {
      console.error(error)
      alert("Error creating user. Please try again.")
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
        <Box onSubmit={handleSubmit} className="aaaaD">
          <TextField
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <TextField
            placeholder="Re-enter Password"
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <Button onClick={createUser}>Sign Up</Button>
        </Box>
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

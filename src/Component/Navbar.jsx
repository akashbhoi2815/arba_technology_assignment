import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const isToken = JSON.parse(localStorage.getItem('token')) || ""
  const navigate = useNavigate()

  const handleClick =()=>{
    localStorage.removeItem('token')
    navigate("/login")
  }
  return (
    <Box zIndex={"3"} bg="red">
      <Link to="/">Home</Link>
      {!isToken ? <Link to="/login">Login</Link> : <Button onClick={handleClick}>Logout</Button>}
      <Link to="/cart">Cart</Link>
      <Link to="/profile">Profile</Link>



    </Box>
  )
}

export default Navbar
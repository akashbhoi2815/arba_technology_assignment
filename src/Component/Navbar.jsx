import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import styles from "../Css/navbar.module.css";
import {
  Box,
  Flex,
  Button,
  Image
} from "@chakra-ui/react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen=()=>{
    setOpen(!open)
  }

  const isToken = JSON.parse(localStorage.getItem("token")) || "";
  const navigate = useNavigate();
  const cart = useSelector((store) => store.appReducer.cart);

  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("homeModal")
    navigate("/login");
  };

  return (
    <Box
      className={styles.navbar}
    >
      <Link to="/">
        <Image w={"80px"} src={logo} />
      </Link>
      <Flex gap={"25px"}>
        <Box> {!isToken ? <Link to="/login">Login</Link> : ""}</Box>
        <Box pos={"relative"}>
          
          <Link to="/cart"><BsFillCartCheckFill size={"35px"} /> <span style={{position:"absolute",top:"-7px",background:"white",borderRadius:"50%",width:"30px",border:"1px solid gray"}}>{cart?.length}</span></Link>
        </Box>
        <Box>
          <Box className={styles.men}>
            <Box><RxAvatar size={"35px"} onClick={handleOpen}/> </Box>
            <Box className={styles.subMenu} style={open ? {display: "block", position: "sticky"} : {display: "none"}}  >
              <ul>
                <Box className={styles.categories}>
                  <Button onClick={handleClick}>Logout</Button>
                  <Link to="/profile">Profile</Link>
                  <Link to="/code">Coding Challenge</Link>
                </Box>
              </ul>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;

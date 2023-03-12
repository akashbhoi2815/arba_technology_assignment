import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getData, removeItemsFromCart } from "../Redux/App/action";
import CarouselPage from "../Component/CarouselPage";
import Navbar from "../Component/Navbar";
import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import styles from "../Css/home.module.css";
import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
 

  const products = useSelector((store) => store.appReducer.products);
  const dispatch = useDispatch();
   const limit = 8;
  useEffect(() => {
    dispatch(getData(limit));
  }, [limit]);

  const cart = useSelector((store) => store.appReducer.cart);

  const increaseQuantity = (id,quantity) => {
    const newQty = +quantity + 1;
    dispatch(addToCart(id, newQty));
  };

  const decreaseQuantity = (id,quantity) => {
    const newQty = +quantity - 1;
    if (newQty === 0) {
      dispatch(removeItemsFromCart(id, newQty));
      return;
    }
    dispatch(addToCart(id, newQty));
  };

  const handleCart = (id) => {
    dispatch(addToCart(id, 1));
   
  };

  return (
    <Box>
      <Navbar />
      <CarouselPage />
      <Heading size={"lg"} textAlign={"left"} p={"20px"}>
        Products
      </Heading>
      <Box className={styles.product_container}>
        {products.length > 0 &&
          products?.map((el) => (
            <GridItem
              border={"1px hidden"}
              minH="400px"
              key={el.id}
              p="1rem"
              className={styles.card}
            >
              <Box minH={"220px"}>
                <Image minW="100%" src={el.image} maxH="220px" />
              </Box>
              <Flex pos={"relative"} justifyContent="center" minH={"100%"}>
                <Box
                  pos={"absolute"}
                  w={"80%"}
                  minH={"180px"}
                  top="-50px"
                  className={styles.card_details}
                >
                  <Heading size={"lg"}>{el.category}</Heading>
                  <Text className={styles.text}>{el.description}</Text>
                  <Text><span>Price:</span> Rs.{el.price}</Text>
                  <Button onClick={() => handleCart(el.id)}>Add to cart</Button>

                 
                  {cart.length>0 && cart.map((item)=>{
                    return item.id === el.id ?
                     <Box key={Date.now()}>
                       <Button onClick={() => decreaseQuantity(el.id,item.quantity)}>-</Button>
                       <Input w={"50px"} readOnly value={item.quantity} />
                       <Button onClick={() => increaseQuantity(el.id,item.quantity)}>+</Button>
                     </Box>
                      : ""
                  })}
                </Box>
              </Flex>
            </GridItem>
          ))}
      </Box>
      <Flex justifyContent={"flex-end"} p="20px">
        <Link to="/products">
        <Button
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          alignItems="center"
          p={"5px"}
        >
          All Products <span><TbMathGreater/> </span><span><TbMathGreater/></span>
        </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Home
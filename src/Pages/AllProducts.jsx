import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getData } from "../Redux/App/action";
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

const AllProducts = () => {
 

  const products = useSelector((store) => store.appReducer.products);
  console.log("products: ", products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const cart = useSelector((store) => store.appReducer.cart);
  console.log("cart: ", cart);

  const increaseQuantity = (id,quantity) => {
    const newQty = +quantity + 1;
    console.log('newQty: ', newQty);
    dispatch(addToCart(id, newQty));
  };

  const decreaseQuantity = (id,quantity) => {
    const newQty = +quantity - 1;
    if(newQty<1){
      return
    }
    dispatch(addToCart(id, newQty));
  };

  const handleCart = (id) => {
    dispatch(addToCart(id, 1));
   
  };

  return (
    <Box>
      <Navbar />
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
                  <Text>Price: Rs.{el.price}</Text>
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
    </Box>
  );
};

export default AllProducts;
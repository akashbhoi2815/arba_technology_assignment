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
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItemsFromCart } from "../Redux/App/action";
import styles from "../Css/home.module.css";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((store) => store.appReducer.cart);

  const dispatch = useDispatch();

  const increaseQuantity = (id, quantity) => {
    const newQty = +quantity + 1;
    console.log("newQty: ", newQty);
    dispatch(addToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = +quantity - 1;
    if (newQty === 0) {
      dispatch(removeItemsFromCart(id, newQty));
      return;
    }
    dispatch(addToCart(id, newQty));
  };

  return (
    <Box>
   

      <Heading size={"lg"} textAlign={"left"} p={"20px"}>
        My Cart
      </Heading>
      {!cart.length ? (
        <Box>
          <MdRemoveShoppingCart size={"250px"} style={{margin:"auto"}}/>
          <Heading>No Product in Your Cart</Heading>
          <Link to="/products">View Products</Link>
        </Box>
      ) : (
        <Box className={styles.product_container}>
          {cart.length > 0 &&
            cart?.map((el) => (
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
                    <Text>Price:{el.price}</Text>

                    <Button
                      onClick={() => decreaseQuantity(el.id, el.quantity)}
                    >
                      -
                    </Button>
                    <Input
                      w={"50px"}
                      readOnly
                      value={el.quantity}
                      className={styles.input}
                    />
                    <Button
                      onClick={() => increaseQuantity(el.id, el.quantity)}
                    >
                      +
                    </Button>
                  </Box>
                </Flex>
              </GridItem>
            ))}
        </Box>
      )}
      <Flex justifyContent={"flex-end"} p="20px">
        <Button
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
        >
          Checkout
        </Button>
      </Flex>
    </Box>
  );
};

export default Cart;

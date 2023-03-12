import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Auth/action";
import {
  Flex,
  Box,
  FormControl,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Circle,
} from "@chakra-ui/react";
import {  ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    username: "mor_2314",
    password: "83r5^_",
  });


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { username, password } = data;

  const handleOnchange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(data)).then((res) => {
      if(res.type==="LOGIN_SUCCESS"){
        navigate("/");
      }
    });
  };

  return (
    <Flex
      // minH={"100vh"}
      h={"100vh"}
      // align={"center"}
      // justify={"center"}
    >
      <Box
        flex={"0.5"}
        bg={useColorModeValue("blue.300", "blue.800")}
        position={"relative"}
      >
        <Circle
          size="250px"
          bg="blue.600"
          color="white"
          position={"absolute"}
          top={"-80px"}
          left={"-70px"}
        />
      </Box>
      <Flex
        // minH={"100vh"}
        // zIndex={"1"}
        align={"center"}
        justify={"center"}
        flex={"0.5"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          // bg={useColorModeValue("white", "gray.700")}
          // rounded={"xl"}
          // boxShadow={"lg"}
          p={6}
          my={12}
        >
          <HStack justifyContent={"center"}>
            <Circle size="60px" bg="blue.500" color="white">
              {/* <PhoneIcon /> */}
            </Circle>
          </HStack>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            App Name
          </Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit.
          </Text>
          <form onSubmit={handleSubmit}>
            <FormControl id="email" isRequired>
              {/* <FormLabel>Email address</FormLabel> */}
              <Input
                placeholder="Username"
                _placeholder={{ color: "gray.500" }}
                type="text"
                name="username"
                value={username}
                variant="flushed"
                onChange={handleOnchange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              {/* <FormLabel>Password</FormLabel> */}
              {/* <Input type="password" placeholder="Password" /> */}
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  variant="flushed"
                  onChange={handleOnchange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl>
              <Button
                w={"100%"}
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                m={"25px auto"}
              >
                Login
              </Button>
            </FormControl>
          </form>
          <Text>
            Don't have an account? <Link href="/signup" color={"blue.400"} to="/signup">Sign Up</Link>
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Login;

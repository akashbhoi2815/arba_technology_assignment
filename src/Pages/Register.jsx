import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Auth/action";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Circle,
} from "@chakra-ui/react";
import { PhoneIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  const [data, setData] = useState({
    username: "mor_2314",
    password: "83r5^_",
  });

  const isLoading = useSelector((store) => store.authReducer);
  console.log("isLoading: ", isLoading);

  const dispatch = useDispatch();

  const { username, password } = data;

  const handleOnchange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(data)).then((res) => console.log("res: ", res));
  };

  return (
    <Flex
      minH={"100vh"}
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
        {/* <Circle
          size="250px"
          bg="blue.600"
          color="white"
          position={"absolute"}
          bottom={"-120px"}
          right={"-80px"}
          overflow={"clip"}
        /> */}
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
            <FormControl id="username" isRequired>
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
            <FormControl id="fullname" isRequired>
              {/* <FormLabel>Email address</FormLabel> */}
              <Input
                placeholder="Fullname"
                _placeholder={{ color: "gray.500" }}
                type="text"
                name="fullname"
                // value={username}
                variant="flushed"
                // onChange={handleOnchange}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              {/* <FormLabel>Email address</FormLabel> */}
              <Input
                placeholder="Email"
                _placeholder={{ color: "gray.500" }}
                type="email"
                name="email"
                // value={username}
                variant="flushed"
                // onChange={handleOnchange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              {/* <FormLabel>Password</FormLabel> */}
              {/* <Input type="password" placeholder="Password" /> */}
              <InputGroup>
                <Input
                  placeholder="Password"
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
            <FormControl id="confirm_pass" isRequired>
              {/* <FormLabel>Password</FormLabel> */}
              {/* <Input type="password" placeholder="Password" /> */}
              <InputGroup>
                <Input
                  placeholder="Confirm Password"
                  type={showConfPass ? "text" : "password"}
                  name="confirm_pass"
                  //   value={password}
                  variant="flushed"
                  //   onChange={handleOnchange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowConfPass((showConfPass) => !showConfPass)
                    }
                  >
                    {showConfPass ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </form>
          <Stack spacing={6}>
            <Button
              type="submit"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Register
            </Button>
            <Text>
              Already have an account? <Link href="/login" color={"blue.400"}>Login</Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Register;

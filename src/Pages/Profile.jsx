import logo from '../logo.svg'
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from '../Component/Navbar';

const Profile = () => {
  return (
    <>
    <Navbar/>
    <Flex justifyContent={"center"} alignItems={"center"} >
      <Box>
        <Box>
          <Image src={logo} alt="" w="150px" borderRadius={"50%"} />
        </Box>
        <Text>User1</Text>
        <Text>user1@gmail.com</Text>
      </Box>
    </Flex>
    <br />
    <hr  />
    <br />
    <Button bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          alignItems="center"
          p={"5px"}
          w="120px">See T&C</Button>
    </>
  );
};

export default Profile;

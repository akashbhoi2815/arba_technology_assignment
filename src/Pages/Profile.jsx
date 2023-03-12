import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ProfileModal from '../Component/cartModal';
import { RxAvatar } from "react-icons/rx";


const Profile = () => {

 

  return (
    <>
    
    <Flex justifyContent={"center"} alignItems={"center"} >
      <Box>
        <Box>
        <RxAvatar size={"155px"} />
        </Box>
        <Text>User1</Text>
        <Text>user1@gmail.com</Text>
      </Box>
    </Flex>
    <br />
    <hr  />
    <br />
   <ProfileModal />
    </>
  );
};

export default Profile;

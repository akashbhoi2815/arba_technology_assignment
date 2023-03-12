import React, { useEffect, useRef } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Modal,
} from "@chakra-ui/react";

const ProfileModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
 

  return (
    <>
      <Button  onClick={onOpen}
       bg={"blue.400"}
       color={"white"}
       _hover={{
         bg: "blue.500",
       }}
       alignItems="center"
       p={"5px"}
       w="120px" >
        See T&C
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Terms & Conditions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              blanditiis fugiat saepe nesciunt molestias quod omnis, dicta error
              in vel quam, explicabo hic itaque? Magnam reiciendis maiores quae
              non corrupti! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
              <br />
              Ipsum consequatur, voluptatum maiores tempora assumenda molestiae
              accusantium magni commodi beatae dolores similique blanditiis
              pariatur minima explicabo veritatis velit ab corrupti quidem.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Accept
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;

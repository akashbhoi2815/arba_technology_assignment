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

const OpenModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalFlag = JSON.parse(localStorage.getItem("homeModal")) || false;

  const btn = useRef();
  useEffect(() => {
    if (!modalFlag) {
      btn.current.click();
    }
  }, []);

  function handleModalAccept() {
    localStorage.setItem("homeModal", JSON.stringify(true));
    onClose();
  }

  return (
    <>
      <Button ref={btn} onClick={onOpen} display="none">
        Open Modal
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
            <Button colorScheme="blue" onClick={handleModalAccept}>
              Accept
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OpenModal;

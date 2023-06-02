import { Button, IconButton, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { forwardRef, useImperativeHandle } from "react"
import { HiChevronLeft } from "react-icons/hi"
import SearchList from "./SearchList"

const SearchModal = (props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // pass an object with a function as it's prop.
  useImperativeHandle(ref, () => ({
    onOpen: onOpen
  }), [onOpen])

  return (
    <>
      {/* <Button 
        onClick={onOpen}>
          Open Modal</Button> */}

      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        size={'full'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            p={0}
          >
            <div
              className="
                flex gap-2
                p-3
              "
            >
              <IconButton 
                //colorScheme='blue' 
                //mr={3} 
                onClick={onClose}
              >
                <HiChevronLeft
                  size={24}
                />
              </IconButton>
              <InputGroup
              >
                <Input 
                  variant={'filled'}
                  type='search' 
                  placeholder='Search for NFTs..' 
                  onChange={(e) => props.setTerm(e.target.value)}
                />
              </InputGroup>
            </div>
          </ModalHeader>
          
          <ModalBody
            p={0}
          >
            <div>
              <SearchList
                results={props.results}
              />
            </div>
          </ModalBody>

          {/* <ModalFooter>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  )
}

export default React.forwardRef(SearchModal)
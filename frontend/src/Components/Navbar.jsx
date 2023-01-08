import {Box, Flex, HStack, Link, IconButton, Menu, useDisclosure, useColorModeValue, Stack} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {

    // Hook that deals with opening and closing hamburger icon
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (

        // Create navbar using box and flex
        <Box bg="blue.600" px={4} fontFamily="Open Sans">
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
               <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen}/>
                <HStack spacing={8} alignItems={'center'} color="white">
                    <Box>
                        <Link to="/" mx={4} px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700'),}}>
                            Home
                        </Link>
                        
                    </Box>
                </HStack>
                
                <Flex alignItems={'center'}>
                    <Menu>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} color="white">
                            <Link to="/register" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700'),}}>
                                
                            </Link>

                            <Link  to="/login" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700'),}}>
                                
                            </Link>        
                        </HStack>
                    </Menu>
                </Flex>
            </Flex>

            {/* Hamburger icon when screen is smaller */}
            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                    
                        <Link color="white"  to="/register" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.200"}}>
                            Register
                        </Link>

                        <Link color="white" to="/login" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.200"}}>
                            Login
                        </Link>

                    </Stack>
                </Box>
            ) : null}
        </Box>

    )
}

export default Navbar
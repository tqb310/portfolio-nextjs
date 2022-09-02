import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';


const LinkItem = ({ href, path, children }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
    return (
        <NextLink>
            <Link p={2} bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

function Navbar(props) {
    return (
        <Box position={"fixed"} as="nav" w={"100%"} bg={useColorModeValue('#ffffff40', '#20202380')}
            sx={{ backdropBlur: 'blur(10px)' }}
            zIndex={1} {...props}>
            <Container display={"flex"} p={2} maxW="container.md" flexWrap="wrap" alignItems={"center"} justifyContent="space-between">

            </Container>
        </Box>
    )
}

export default Navbar
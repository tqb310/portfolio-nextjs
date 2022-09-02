import React from 'react';
import Head from 'next/head';
import Navbar from '../navbar';
import { Box, Container } from '@chakra-ui/react';

function Main({ children, router }) {
    return (
        <Box as='main' sx={{ pb: 8 }} >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="IE=11" />
                <title>Truong Quoc Bao - Homepage</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW={'container.md'} pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
// bg="#191D27"
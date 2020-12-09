import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import * as React from 'react';
import Routes from './Routes';

export default function Layout() {
    // <ColorModeSwitcher justifySelf="flex-end" />
    return (
        <ChakraProvider theme={theme}>
            <Flex minH="100vh" p={3} justify="center" align="center">
                <Routes />
            </Flex>
        </ChakraProvider>
    );
}

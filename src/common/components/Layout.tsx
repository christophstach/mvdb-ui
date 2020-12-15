import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import * as React from 'react';
import Routes from './Routes';
import MainNavigation from './MainNavigation';

export default function Layout() {
    // <ColorModeSwitcher justifySelf="flex-end" />
    return (
        <ChakraProvider theme={theme}>
            <MainNavigation />

            <Flex minH="calc(100vh - 88px)" p={3} justify="center" align="center">
                <Routes />
            </Flex>
        </ChakraProvider>
    );
}

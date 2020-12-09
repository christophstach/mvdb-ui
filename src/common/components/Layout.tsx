import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import * as React from 'react';
import Routes from './Routes';

export default function Layout() {
    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />

                    <Routes />
                </Grid>
            </Box>
        </ChakraProvider>
    );
}

import * as React from "react"
import { Box, ChakraProvider, Grid, theme, Container, } from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { BrowserRouter } from "react-router-dom"

export const App = () => (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />

            <Container>
              There are many benefits to a joint design and development system. Not only
              does it bring benefits to the design team, but it also brings benefits to
              engineering teams. It makes sure that our experiences have a consistent look
              and feel, not just in our design specs, but in production

              <Box rounded="20px" boxShadow="sm" bg="gray.200">
                Test
              </Box>
            </Container>
          </Grid>
        </Box>
      </ChakraProvider>
    </BrowserRouter>
)

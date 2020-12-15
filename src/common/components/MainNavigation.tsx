import * as React from 'react';
import { Flex, Heading, Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import User from '../models/User';
import { getUser } from '../helpers/UserHelper';

interface MenuItemProps {
    to: string;
    label: string;
}

function MenuItem(props: MenuItemProps) {
    return (
        <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
            <Link to={props.to}>
                {props.label}
            </Link>
        </Text>
    );
}

export default function MainNavigation (props: any) {
    const [show, setShow] = React.useState(false);
    const [user, setUser] = React.useState<User | null>(null);

    React.useEffect(() => {
        getUser().then((u) => {
            setUser(u);
        });
    }, []);

    const handleToggle = () => setShow(!show);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg="gray.500"
            color="#ffffff"
            boxShadow="dark-lg"
            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                    MVDB
                </Heading>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <svg
                    fill="white"
                    width="12px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </Box>

            <Box
                display={{ sm: show ? "block" : "none", md: "flex" }}
                width={{ sm: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
            >
                <MenuItem label="Home" to="/" />
                { user && <MenuItem label="Wishlist" to="/wishlist" /> }
            </Box>

            <Box
                display={{ sm: show ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                {
                    user ? (
                        <Button bg="transparent" border="1px">
                            <Link to="/auth/logout">Logout</Link>
                        </Button>
                    ): (
                        <Button bg="transparent" border="1px">
                            <Link to="">Login</Link>
                        </Button>
                    )
                }
            </Box>
        </Flex>
    );
}

import * as React from "react"
import { Box, Button, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { StarIcon, TimeIcon } from "@chakra-ui/icons";
import { secondsToHm } from '../../../common/helpers/TimeHelper';

interface MovieCardProps {
    title: string;
    description: string;
    picture: string;
    stars: number;
    duration: number;
}

export default function MovieCard(props: MovieCardProps) {
    const color = useColorModeValue("white", "gray.800");
    const allowedDescriptionLength = 70;
    const description = props.description.length > allowedDescriptionLength ?
        props.description.substring(0 , allowedDescriptionLength) + "..." :
        props.description;


    return (
        <Box
            bgImage={"url(" + props.picture + ")"}
            backgroundPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            w="250px"
            overflow="hidden"
            boxShadow="dark-lg"
            height="370px">

            <Box
                p={4}
                w="100%"
                h="100%"
                backgroundImage="linear-gradient(0deg, #000 20%, transparent)"
            >
                <Flex direction="column" h="100%">
                    <Box textAlign="right">
                        <Button size="sm" fontWeight="normal">Add to Wishlist</Button>
                    </Box>
                    <Box flex={1}>
                    </Box>
                    <Box>
                        <Heading textColor={color} fontSize="s" textAlign="left" mb={2}>{props.title}</Heading>
                        <Box
                            textColor={color}
                            fontSize="xs"
                            h="40px"
                            mb={2}
                            textAlign="left"
                        >{description}</Box>

                        <Flex align="center">
                            <Box flex={1} textColor={color} fontSize="xs" textAlign="left">
                                <Flex align="center">
                                    <Box><TimeIcon color="gray.300" /></Box>
                                    <Box ml={2}>{secondsToHm(props.duration)}</Box>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex align="center">
                                    {
                                        Array(5)
                                            .fill("")
                                            .map((_, i) => {
                                                    return (
                                                        <StarIcon
                                                            key={i}
                                                            w={2}
                                                            h={2}
                                                            color={i < Math.floor(props.stars) ? "yellow.500" : "gray.300"}
                                                        />
                                                    )
                                                }
                                            )
                                    }
                                    <Text
                                        ml={2}
                                        textColor={color}
                                        fontSize="xs">
                                        {props.stars.toFixed(1)} of 5
                                    </Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}

/*
const das = (
    <Box textAlign="right" mb="180px">
        <Button size="sm" fontWeight="normal">Add to Wishlist</Button>
    </Box>

<Heading textColor={color} fontSize="s" textAlign="left" mb={2}>{props.title}</Heading>
<Box
    textColor={color}
    fontSize="xs"
    h="40px"
    backgroundColor="#ff0000"
    textAlign="left">{description}</Box>

<Box d="flex" mt="2" alignItems="center">
    {
        Array(5)
            .fill("")
            .map((_, i) => {
                    return (
                        <StarIcon
                            key={i}
                            w={2}
                            h={2}
                            color={i < Math.floor(props.stars) ? "yellow.500" : "gray.300"}
                        />
                    )
                }
            )
    }
    <Text
        textColor={color}
        fontSize="xs">
        {props.stars.toFixed(1)} of 5
    </Text>
</Box>
)*/

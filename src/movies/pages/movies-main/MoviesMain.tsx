import * as React from "react";
import { Container, Flex, SimpleGrid } from '@chakra-ui/react';
import MovieCard from '../../components/movie-card/MovieCard';
import { useQuery } from 'react-query';
import { getMovies } from '../../../common/apis/MoviesDictionary';

export default function MoviesMain() {
    const moviesQuery = useQuery('movies', getMovies);

    return (
        <Container w="900px" maxW="900px">
            <SimpleGrid minChildWidth="250px" maxChildWidth="250px" spacing={2} >
                {
                    moviesQuery.data?.map((movie) => {
                        return (
                            <Flex align="center" justify="center">
                                <MovieCard
                                    key={movie.id}
                                    title={movie.title}
                                    description={movie.description}
                                    picture={movie.picture}
                                    stars={movie.stars}
                                    duration={movie.duration} />

                            </Flex>
                        )
                    })
                }
            </SimpleGrid>

        </Container>
    );
}

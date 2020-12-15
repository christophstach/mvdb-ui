import * as React from "react";
import { Container, Flex, SimpleGrid } from '@chakra-ui/react';
import MovieCard from '../../components/movie-card/MovieCard';
import { useQuery } from 'react-query';
import { getMovies } from '../../../common/apis/MoviesDictionary';
import User from '../../../common/models/User';
import { getUser } from '../../../common/helpers/UserHelper';

export default function MoviesMain() {
    const moviesQuery = useQuery('movies', getMovies);
    const [user, setUser] = React.useState<User | null>(null);

    React.useEffect(() => {
        getUser().then((u) => {
            setUser(u);
        });
    }, []);

    function handleAddToWishlist(id: string) {

    }

    return (
        <Container w="900px" maxW="900px">
            <SimpleGrid minChildWidth="250px" spacing={2} >
                {
                    moviesQuery.data?.map((movie) => {
                        return (
                            <Flex align="center" justify="center">
                                <MovieCard
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    description={movie.description}
                                    picture={movie.picture}
                                    stars={movie.stars}
                                    duration={movie.duration}
                                    showAddToWishlist={!!user}
                                    onAddToWishlist={handleAddToWishlist}
                                />
                            </Flex>
                        )
                    })
                }
            </SimpleGrid>
        </Container>
    );
}

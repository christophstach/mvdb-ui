import * as React from "react";
import MovieCard from '../../components/movie-card/MovieCard';
import { useQuery } from 'react-query';
import { getMovies } from '../../../common/apis/MoviesDictionary';
import User from '../../../common/models/User';
import { getUser } from '../../../common/helpers/UserHelper';
import { Card, Col, Container, Row } from 'react-bootstrap';

import './MoviesMain.scss'

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
        <Container className="movies-main">
            <Card>
                <Card.Body>
                    <Row>
                        {
                            moviesQuery.data?.map((movie) => {
                                return (
                                    <Col>
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
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

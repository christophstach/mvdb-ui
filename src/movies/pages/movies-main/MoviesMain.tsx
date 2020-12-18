import * as React from "react";
import MovieCard from '../../components/movie-card/MovieCard';
import User from '../../../common/models/User';
import { getUser } from '../../../common/helpers/UserHelper';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';

import './MoviesMain.scss'
import WishlistItem from '../../../common/models/WishlistItem';
import useMoviesService from '../../../common/services/movies.service';
import useWishlistItemService from '../../../common/services/wishlist-items.service';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faClock, faStar, faHeart);

export default function MoviesMain() {
    const [user, setUser] = React.useState<User | null>(null);

    const moviesService = useMoviesService();
    const wishlistItemService = useWishlistItemService();

    React.useEffect(() => {
        getUser().then((u) => {
            setUser(u);
        });
    }, []);

    function handleAddToWishlist(id: string) {
        const movie = moviesService.manyQuery.data?.find((movie) => movie.id === id);

        if (movie) {
            const item: Partial<WishlistItem> = {
                title: movie.title,
                type: 'Movie',
                referenceId: movie.id,
                referenceUrl: 'http://google.de'
            }

            wishlistItemService.createMutation.mutate(item);
        }
    }

    function handleRemoveFromWishlist(id: string) {
        const item = wishlistItemService.manyQuery.data?.find((item) => item.referenceId === id);

        if (item) {
            wishlistItemService.deleteMutation.mutate(item.id);
        }
    }

    return (
        <Container className="movies-main">
            <Card>
                <Card.Body>
                    <Row>
                        {
                            moviesService.manyQuery.isLoading ? (
                                <Col style={{textAlign: 'center', padding: '1rem'}}>
                                    <Spinner animation="grow" variant="primary" />
                                    <Spinner animation="grow" variant="secondary" />
                                    <Spinner animation="grow" variant="success" />
                                    <Spinner animation="grow" variant="danger" />
                                    <Spinner animation="grow" variant="warning" />
                                    <Spinner animation="grow" variant="info" />
                                    <Spinner animation="grow" variant="dark" />
                                </Col>
                            ) : moviesService.manyQuery.data?.map((movie) => {
                                const isOnWishlist = !!wishlistItemService.manyQuery.data?.find((item) => {
                                    return item.referenceId === movie.id;
                                });

                                return (
                                    <Col key={movie.id}>
                                        <MovieCard
                                            id={movie.id}
                                            title={movie.title}
                                            description={movie.description}
                                            picture={movie.picture}
                                            stars={movie.stars}
                                            duration={movie.duration}
                                            showAddToWishlist={!!user}
                                            isOnWishlist={isOnWishlist}
                                            onAddToWishlist={isOnWishlist ? handleRemoveFromWishlist : handleAddToWishlist}
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

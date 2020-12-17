import * as React from "react";
import MovieCard from '../../components/movie-card/MovieCard';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getMovies } from '../../../common/apis/MoviesDictionary';
import User from '../../../common/models/User';
import { getUser } from '../../../common/helpers/UserHelper';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useToasts } from 'react-toast-notifications';


import './MoviesMain.scss'
import Movie from '../../../common/models/Movie';
import WishlistItem from '../../../common/models/WishlistItem';
import { deleteWishlistItem, getWishlistItems, postWishlistItem } from '../../../common/apis/Wishlist';

export default function MoviesMain() {
    const [user, setUser] = React.useState<User | null>(null);
    const {addToast} = useToasts();

    const queryClient = useQueryClient();

    const moviesQuery = useQuery<Movie[]>('movies', getMovies);
    const wishlistItemsQuery = useQuery<WishlistItem[]>('wishlistItems', getWishlistItems);
    const createWishlistItemMutation = useMutation<WishlistItem,
        any,
        any,
        any>((item: Partial<WishlistItem>) => {
        return postWishlistItem(item);
    }, {
        onSettled(item) {
            queryClient.invalidateQueries(['wishlistItems']);
            queryClient.invalidateQueries(['movies']);

            addToast('Added movie to wishlist', {
                appearance: 'success',
                autoDismiss: true,
            });
        }
    });

    const deleteWishlistItemMutation = useMutation<WishlistItem,
        any,
        any,
        any>((id: string) => {
        return deleteWishlistItem(id);
    }, {
        onSettled(item) {
            queryClient.invalidateQueries(['wishlistItems']);
            queryClient.invalidateQueries(['movies']);

            addToast('Removed movie from wishlist', {
                appearance: 'success',
                autoDismiss: true,
            });
        }
    });

    React.useEffect(() => {
        getUser().then((u) => {
            setUser(u);
        });
    }, []);

    function handleAddToWishlist(id: string) {
        const movie = moviesQuery.data?.find((movie) => movie.id === id);

        if (movie) {
            const item: Partial<WishlistItem> = {
                title: movie.title,
                type: 'Movie',
                referenceId: movie.id,
                referenceUrl: 'http://google.de'
            }

            createWishlistItemMutation.mutate(item);
        }
    }

    function handleRemoveFromWishlist(id: string) {
        const item = wishlistItemsQuery.data?.find((item) => item.referenceId === id);

        if(item) {
            deleteWishlistItemMutation.mutate(item.id);
        }
    }

    return (
        <Container className="movies-main">
            <Card>
                <Card.Body>
                    <Row>
                        {
                            moviesQuery.data?.map((movie) => {
                                const isOnWishlist = !!wishlistItemsQuery.data?.find((item) => {
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

import * as React from "react";
import { Card, Col, Container, Spinner } from 'react-bootstrap';

import './MovieSingle.scss';
import useMoviesService from '../../../common/services/movies.service';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { minutesToHm } from '../../../common/helpers/TimeHelper';

library.add(faStar);

interface MoviesSingleRouteParams {
    movieId: string;
}

export default function MoviesSingle() {
    let {movieId} = useParams<MoviesSingleRouteParams>();

    const moviesService = useMoviesService();
    const movie = moviesService.manyQuery.data?.find((m) => m.id === movieId);

    return (
        <Container className="movies-single">
            {
                moviesService.manyQuery.isLoading ? (
                    <Card>
                        <Card.Body>
                            <Col style={{textAlign: 'center', padding: '1rem'}}>
                                <Spinner animation="grow" variant="primary"/>
                                <Spinner animation="grow" variant="secondary"/>
                                <Spinner animation="grow" variant="success"/>
                                <Spinner animation="grow" variant="danger"/>
                                <Spinner animation="grow" variant="warning"/>
                                <Spinner animation="grow" variant="info"/>
                                <Spinner animation="grow" variant="dark"/>
                            </Col>
                        </Card.Body>
                    </Card>

                ) : (
                    movie ? (
                        <Card>
                            <Card.Img src={movie.picture}/>
                            <Card.Body>
                                <Card.Title>{movie.title} ({minutesToHm(movie.duration)})</Card.Title>
                                <Card.Text>{movie.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                {
                                    Array(5)
                                        .fill("")
                                        .map((_, i) => {
                                                return (
                                                    <FontAwesomeIcon
                                                        key={i}
                                                        icon={["fas", "star"]}
                                                        className={i < Math.floor(movie.stars) ? "yellow" : "gray"}
                                                    />
                                                )
                                            }
                                        )
                                }
                            </Card.Footer>
                        </Card>
                    ) : (
                        <Card>
                            <Card.Body>
                                <Card.Text>No Movie found</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                )
            }
        </Container>
    );
}

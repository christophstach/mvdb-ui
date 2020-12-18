import * as React from "react";
import { Button, Card, Col, Container, Row, Spinner, Table } from 'react-bootstrap';

import './WishlistMain.scss'
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import useWishlistItemService from '../../../common/services/wishlist-items.service';

library.add(faTrash);

export default function WishlistMain() {
    const wishlistItemService = useWishlistItemService();

    function handleRemoveFromWishlist(id: string) {
        const item = wishlistItemService.manyQuery.data?.find((item) => item.referenceId === id);

        if (item) {
            wishlistItemService.deleteMutation.mutate(item.id);
        }
    }

    return (
        <Container className="wishlist-main">
            <Card>
                {
                    wishlistItemService.manyQuery.isLoading ? (
                        <Card.Body>
                            <Row>
                                <Col style={{textAlign: 'center', padding: '1rem'}}>
                                    <Spinner animation="grow" variant="primary" />
                                    <Spinner animation="grow" variant="secondary" />
                                    <Spinner animation="grow" variant="success" />
                                    <Spinner animation="grow" variant="danger" />
                                    <Spinner animation="grow" variant="warning" />
                                    <Spinner animation="grow" variant="info" />
                                    <Spinner animation="grow" variant="dark" />
                                </Col>
                            </Row>
                        </Card.Body>
                    ): (
                        <Table striped hover>
                            <thead>
                            <tr>
                                <th style={{width: '100%'}}>Title</th>
                                <th> </th>
                            </tr>

                            </thead>
                            <tbody>
                            {
                                wishlistItemService.manyQuery.data && wishlistItemService.manyQuery.data.length > 0 ? wishlistItemService.manyQuery.data?.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.title}</td>
                                            <td style={{whiteSpace: 'nowrap'}}>
                                                <LinkContainer to={`/movies/${item.referenceId}`}>
                                                    <Button variant="primary" size="sm">Goto movie</Button>
                                                </LinkContainer>
                                            </td>
                                            <td>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => handleRemoveFromWishlist(item.id)}>
                                                    <FontAwesomeIcon icon={["fas", "trash"]}/>
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                }) : (
                                    <tr>
                                        <td colSpan={3}>You don't have items on your wishlist</td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </Table>
                    )
                }
            </Card>
        </Container>
    );
}

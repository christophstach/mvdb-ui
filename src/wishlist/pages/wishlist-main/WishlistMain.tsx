import * as React from "react";
import { Button, Card, Container, Table } from 'react-bootstrap';

import './WishlistMain.scss'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteWishlistItem, getWishlistItems } from '../../../common/apis/Wishlist';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import WishlistItem from '../../../common/models/WishlistItem';
import { useToasts } from 'react-toast-notifications';

library.add(faTrash);

export default function WishlistMain() {
    const wishlistItemsQuery = useQuery('wishlistItems', getWishlistItems);
    const queryClient = useQueryClient();
    const {addToast} = useToasts();

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

    function handleRemoveFromWishlist(id: string) {
        deleteWishlistItemMutation.mutate(id);
    }

    return (
        <Container className="wishlist-main">
            <Card>
                <Table striped hover>
                    <thead>
                    <tr>
                        <th style={{width: '100%'}}>Title</th>
                        <th></th>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        wishlistItemsQuery.data && wishlistItemsQuery.data.length > 0 ? wishlistItemsQuery.data?.map((item) => {
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
            </Card>
        </Container>
    );
}

import * as React from "react";
import { Card, Container, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './WishlistMain.scss'

export default function WishlistMain() {
    return (
        <Container className="wishlist-main">
            <Card>
                <Table striped hover>
                    <thead>
                    <tr>
                        <th>
                            Item Type
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            Url
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Movie</td>
                        <td>Lalala 1</td>
                        <td>
                            <Link to="/">Geh da hin</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Movie</td>
                        <td>Lalala 1</td>
                        <td>
                            <Link to="/movies/123">Geh da hin</Link>
                        </td>
                    </tr>

                    </tbody>
                </Table>
            </Card>
        </Container>
    );
}

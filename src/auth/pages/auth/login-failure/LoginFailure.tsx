import * as React from "react";
import config from '../../../../config/default';
import { Card, Container } from 'react-bootstrap';

import './LoginFailure.scss';


export default function LoginFailure() {
    localStorage.removeItem(config.tokenLocalStorageKey);

    setTimeout(() => {
        window.location.href = '/';
    }, 3000);

    return (
        <Container className="login-failure">
            <Card>
                <Card.Body>
                    <Card.Title>Login failed</Card.Title>
                </Card.Body>
            </Card>
        </Container>
    );
}

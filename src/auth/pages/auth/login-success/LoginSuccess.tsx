import * as React from "react";
import { useParams } from "react-router-dom";
import config from '../../../../config/default';
import User from '../../../../common/models/User';
import { getUser } from '../../../../common/helpers/UserHelper';

import './LoginSuccess.scss';
import { Card, Container } from 'react-bootstrap';

interface RouteParams {
    token: string;
}

export default function LoginSuccess() {
    const { token } = useParams<RouteParams>();

    const [user, setUser] = React.useState<User | null>(null);

    React.useEffect(() => {
        getUser().then((u) => {
            setUser(u);
        });
    }, []);

    if (token) {
       localStorage.setItem(config.userIdLocalStorageKey, token);

       setTimeout(() => {
           window.location.href = '/';
       }, 3000);
    }

    return (
        <Container className="login-success">
            <Card>
                <Card.Body>
                    <Card.Title>Welcome back {user?.Name}</Card.Title>
                </Card.Body>
            </Card>
        </Container>
    );
}

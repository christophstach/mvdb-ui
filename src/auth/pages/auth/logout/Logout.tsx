import * as React from "react";
import config from '../../../../config/default';
import User from '../../../../common/models/User';
import { getUser } from '../../../../common/helpers/UserHelper';
import { Card, Container } from 'react-bootstrap';


import './Logout.scss';

export default function Logout() {
    const [user, setUser] = React.useState<User | null>(null);

    React.useEffect(() => {
        getUser().then((u) => {
            setUser(u);
        });
    }, []);

    setTimeout(() => {
        localStorage.removeItem(config.tokenLocalStorageKey);
        window.location.href = '/';
    }, 3000);

    return (
        <Container className="logout">
            <Card>
                <Card.Body>
                    <Card.Title>Goodbye {user?.Name}</Card.Title>
                </Card.Body>
            </Card>
        </Container>
    );
}

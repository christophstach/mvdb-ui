import * as React from 'react';
import User from '../../models/User';
import { getUser } from '../../helpers/UserHelper';
import { LinkContainer } from 'react-router-bootstrap';

import { Nav, Navbar } from 'react-bootstrap';

import './MainNavigation.scss';

export default function MainNavigation(props: any) {
    const [user, setUser] = React.useState<User | null>(null);

    React.useEffect(() => {
        getUser().then((u) => {
            setUser(u);
        });
    }, []);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <LinkContainer to="/">
                <Navbar.Brand>MVDB</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer exact activeClassName="active" to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    {
                        user && (
                            <LinkContainer to="/wishlist">
                                <Nav.Link>Wishlist</Nav.Link>
                            </LinkContainer>
                        )
                    }

                    {
                        user ? (
                            <LinkContainer to="/auth/logout">
                                <Nav.Link>Logout</Nav.Link>
                            </LinkContainer>
                        ) : (
                            <LinkContainer to="/auth/login/success/123">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        )
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

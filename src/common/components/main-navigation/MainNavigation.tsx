import * as React from 'react';
import User from '../../models/User';
import { getUser } from '../../helpers/UserHelper';
import { LinkContainer } from 'react-router-bootstrap';

import { Image, Nav, Navbar } from 'react-bootstrap';

import './MainNavigation.scss';
import config from '../../../config/default';

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
                </Nav>
                <Nav>
                    {
                        user ? (
                            <>
                                <LinkContainer to="/auth/logout">
                                    <Nav.Link>Logout</Nav.Link>
                                </LinkContainer>
                                <Nav.Link className="ml-auto">
                                    {user.Name}
                                </Nav.Link>
                                <Image height={40} src="https://lh3.googleusercontent.com/a-/AOh14GhutiSluwhehIu3xQaYEpceNP9Qv9FqjSkmTedPFpw=s96-c" roundedCircle />
                            </>
                        ) : (
                            <Nav.Link href={config.authUrl}>
                                Login
                            </Nav.Link>
                        )
                    }   
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

import * as React from "react";
import { useParams } from "react-router-dom";
import config from '../../../config/default';
import User from '../../../common/models/User';
import { getUser } from '../../../common/helpers/UserHelper';

import { Heading } from '@chakra-ui/react';

export default function LoginSuccess() {
    const { token } = useParams();

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
        <div>
            <Heading as="h2">Welcome back {user?.Name}!</Heading>
        </div>
    );
}

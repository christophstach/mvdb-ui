import * as React from "react";
import config from '../../../config/default';

import { Heading } from '@chakra-ui/react';

export default function LoginFailure() {
    localStorage.removeItem(config.userIdLocalStorageKey);

    setTimeout(() => {
        window.location.href = '/';
    }, 3000);

    return (
        <div>
            <Heading as="h2">Login failed!</Heading>
        </div>
    );
}

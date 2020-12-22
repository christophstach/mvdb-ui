import User from '../models/User';

import config from '../../config/default';
import jwtDecode from 'jwt-decode';


export async function getUser(): Promise<User | null> {
    const token = localStorage.getItem(config.tokenLocalStorageKey);

    if (token) {
        try {
            const user: User = jwtDecode(token);
            return user;
        } catch (e) {
            localStorage.removeItem(config.tokenLocalStorageKey);
        }
    }

    return null;
}

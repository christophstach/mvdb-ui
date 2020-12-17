import User from '../models/User';
import { getUserInformation } from '../apis/Auth';
import config from '../../config/default';

export async function getUser(): Promise<User | null> {
    const token = localStorage.getItem(config.tokenLocalStorageKey);

    if(token) {
        try {
            return await getUserInformation(token);
        } catch (e) {
            localStorage.removeItem(config.tokenLocalStorageKey);
        }
    }

    return null;
}

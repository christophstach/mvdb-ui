import User from '../models/User';
import { getUserInformation } from '../apis/Auth';
import config from '../../config/default';

export async function getUser(): Promise<User | null> {
    const userId = localStorage.getItem(config.userIdLocalStorageKey);

    if(userId) {
        try {
            return await getUserInformation(userId);
        } catch (e) {
            localStorage.removeItem(config.userIdLocalStorageKey);
        }
    }

    return null;
}

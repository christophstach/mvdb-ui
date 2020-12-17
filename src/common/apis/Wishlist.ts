import axios from 'axios';
import WishlistItem from '../models/WishlistItem';
import config from '../../config/default';

const endpoint = config.wishlistApiEndpoint;

export async function getWishlistItems() {
    const token = localStorage.getItem(config.tokenLocalStorageKey);

    return await axios.get<WishlistItem[]>(`${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.data);
}


export async function postWishlistItem(item: Partial<WishlistItem>) {
    const token = localStorage.getItem(config.tokenLocalStorageKey);

    return await axios.post<WishlistItem>(`${endpoint}`, item, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.data);
}



export async function deleteWishlistItem(id: string) {
    const token = localStorage.getItem(config.tokenLocalStorageKey);
    return await axios.delete<WishlistItem>(`${endpoint}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.data);
}

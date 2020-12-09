import axios from 'axios';
import WishlistItem from '../models/WishlistItem';

const endpoint = 'https://wishlist.mvdb.christophstach.me/items';

export async function getItems() {
    return await axios.get<WishlistItem[]>(`${endpoint}`).then(response => response.data);
}

export async function getItem(id: string) {
    return await axios.get<WishlistItem>(`${endpoint}/${id}`).then(response => response.data);
}

export async function postItem(item: Partial<WishlistItem>) {
    return await axios.post<WishlistItem>(`${endpoint}`, item).then(response => response.data);
}

export async function putItem(id: string, item: Partial<WishlistItem>) {
    return await axios.put<WishlistItem>(`${endpoint}/${id}`, item).then(response => response.data);
}

export async function deleteItem(id: string) {
    return await axios.delete<WishlistItem>(`${endpoint}/${id}`).then(response => response.data);
}

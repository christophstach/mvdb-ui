import { useMutation, useQuery, useQueryClient } from 'react-query';
import WishlistItem from '../models/WishlistItem';
import { deleteWishlistItem, getWishlistItems, postWishlistItem } from '../apis/Wishlist';
import { useToasts } from 'react-toast-notifications';

export default function useWishlistItemService() {
    const queryClient = useQueryClient();
    const {addToast} = useToasts();

    const manyQuery = useQuery<WishlistItem[] | null>('wishlistItems', getWishlistItems);

    const createMutation = useMutation<WishlistItem | null,
        any,
        any,
        any>((item) => {
        return postWishlistItem(item);
    }, {
        onSettled(item) {
            queryClient.invalidateQueries(['wishlistItems']);
            queryClient.invalidateQueries(['movies']);

            addToast('Added movie to wishlist', {
                appearance: 'success',
                autoDismiss: true,
            });
        }
    });

    const deleteMutation = useMutation<WishlistItem,
        any,
        any,
        any>((id: string) => {
        return deleteWishlistItem(id);
    }, {
        onSettled(item) {
            queryClient.invalidateQueries(['wishlistItems']);
            queryClient.invalidateQueries(['movies']);

            addToast('Removed movie from wishlist', {
                appearance: 'success',
                autoDismiss: true,
            });
        }
    });

    return {
        manyQuery,
        createMutation,
        deleteMutation
    }
}



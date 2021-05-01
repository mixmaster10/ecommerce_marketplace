export const actionTypes = {
    GET_WISHLIST_LIST: 'GET_WISHLIST_LIST',
    GET_WISHLIST_LIST_SUCCESS: 'GET_WISHLIST_LIST_SUCCESS',
    GET_WISHLIST_LIST_ERROR: 'GET_WISHLIST_LIST_ERROR',

    ADD_ITEM_WISHLISH: 'ADD_ITEM_WISHLISH',
    REMOVE_ITEM_WISHLISH: 'REMOVE_ITEM_WISHLISH',

    UPDATE_WISHLISH_LIST: 'UPDATE_WISHLISH_LIST',
    UPDATE_WISHLISH_LIST_SUCCESS: 'UPDATE_WISHLISH_LIST_SUCCESS',
    UPDATE_WISHLISH_LIST_ERROR: 'UPDATE_WISHLISH_LIST_ERROR',

    CLEAR_WISHLISH_LIST: 'CLEAR_WISHLISH_LIST',
};

export function getWishlistList() {
    return { type: actionTypes.GET_WISHLIST_LIST };
}

export function getWishlistListSuccess(data) {
    return {
        type: actionTypes.GET_WISHLIST_LIST_SUCCESS,
        data,
    };
}

export function addItemToWishlist(product) {
    return { type: actionTypes.ADD_ITEM_WISHLISH, product };
}

export function removeWishlistItem(product) {
    return { type: actionTypes.REMOVE_ITEM_WISHLISH, product };
}

export function clearWishlist() {
    return { type: actionTypes.CLEAR_CART };
}

export function updateWishlistListSuccess(payload) {
    return {
        type: actionTypes.UPDATE_WISHLISH_LIST_SUCCESS,
        payload,
    };
}

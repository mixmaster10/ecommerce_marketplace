export const actionTypes = {
    GET_SELLER_WALL_POSTS: 'GET_SELLER_WALL_POSTS',
    RECEIVE_SELLER_WALL_POSTS: 'RECEIVE_SELLER_WALL_POSTS',
    SELLER_POST_TO_WALL: 'SELLER_POST_TO_WALL',
    SELLER_POST_SUCCESS: 'SELLER_POST_SUCCESS',
    TOGGLE_LIKE: 'TOGGLE_LIKE',
    GET_SELLER_INFO: 'GET_SELLER_INFO',
    RECEIVE_SELLER_INFO: 'RECEIVE_SELLER_INFO',
};

export function getSellerInfo() {
    return {
        type: actionTypes.GET_SELLER_INFO,
    };
}
export function receiveSellerInfo(payload) {
    return {
        type: actionTypes.RECEIVE_SELLER_INFO,
        payload,
    };
}

export function getSellerWallPosts() {
    return {
        type: actionTypes.GET_SELLER_WALL_POSTS,
    };
}

export function receiveSellerWallPosts(payload) {
    return {
        type: actionTypes.RECEIVE_SELLER_WALL_POSTS,
        payload,
    };
}
export function sellerPostToWall(payload) {
    return {
        type: actionTypes.SELLER_POST_TO_WALL,
        payload,
    };
}
export function sellerPostSuccess(payload) {
    return {
        type: actionTypes.SELLER_POST_SUCCESS,
        payload,
    };
}

export const actionTypes = {
    CREATE_POST_TITLE: 'CREATE_POST_TITLE',
    CREATE_POST_MESSAGE: 'CREATE_POST_MESSAGE',
    CREATE_POST_FILE: 'CREATE_POST_FILE',
    CREATE_POST_SELECT: 'CREATE_POST_SELECT',
    CREATE_POST_LINK: 'CREATE_POST_LINK',
    CREATE_POST_PUBLISH: 'CREATE_POST_PUBLISH',
    GET_NEW_POST: 'GET_NEW_POST',
    POST_NEW_POST: 'POST_NEW_POST',
    GET_ALL_POSTS: 'GET_ALL_POSTS',
    RECEIVE_WALL_POSTS: 'RECEIVE_WALL_POSTS',
    TOGGLE_LIKE: 'TOGGLE_LIKE',
};

export function createPostTitle(payload) {
    return {
        type: actionTypes.CREATE_POST_TITLE,
        payload,
    };
}
export function createPostDescription(payload) {
    return {
        type: actionTypes.CREATE_POST_MESSAGE,
        payload,
    };
}
export function createPostFile(payload) {
    return {
        type: actionTypes.CREATE_POST_FILE,
        payload,
    };
}
export function createPostLink(payload) {
    return {
        type: actionTypes.CREATE_POST_LINK,
        payload,
    };
}
export function createPostSelect(payload) {
    return {
        type: actionTypes.CREATE_POST_SELECT,
        payload,
    };
}
export function createPostPublish(payload) {
    return {
        type: actionTypes.CREATE_POST_PUBLISH,
        payload,
    };
}
export function getNewPost(payload) {
    return {
        type: actionTypes.GET_NEW_POST,
        payload,
    };
}

export function postNewPost(payload) {
    return {
        type: actionTypes.POST_NEW_POST,
        payload,
    };
}

export function getAllPosts() {
    return {
        type: actionTypes.GET_ALL_POSTS,
    };
}

export function receiveWallPosts(payload) {
    return {
        type: actionTypes.RECEIVE_WALL_POSTS,
        payload,
    };
}
export function toggleLike(payload, id) {
    return {
        type: actionTypes.TOGGLE_LIKE,
        payload,
        id,
    };
}

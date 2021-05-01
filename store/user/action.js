export const actionTypes = {
    LOAD_USER_DATA: 'LOAD_USER_DATA',
    ADD_POST: 'ADD_POST',
};

export function loadUserData(payload) {
    return {
        type: actionTypes.LOAD_USER_DATA,
        payload,
    };
}

export function addPost(payload) {
    if (payload) {
        return {
            type: actionTypes.ADD_POST,
            payload,
        };
    }
}

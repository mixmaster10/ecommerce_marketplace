import friendData from '../../pages/friends/friendData.json';

export const actionTypes = {
    GET_FRIENDS: 'GET_FRIENDS',
    GET_FRIENDS_SUCCESS: 'GET_FRIENDS_SUCCESS',
    GET_FRIENDS_ERROR: 'GET_FRIENDS_ERROR',
};

export function getFriends() {
    try {
        const data = friendData;
        return { type: actionTypes.GET_FRIENDS_SUCCESS, payload: data };
    } catch (error) {
        return {
            type: actionTypes.GET_FRIENDS_ERROR,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        };
    }
}

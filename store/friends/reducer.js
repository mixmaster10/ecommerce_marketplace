import { actionTypes } from './action';

export const initialState = {
    user: {},
    suggestedFriends: [],
    friendRequests: [],
    friendsLoading: false,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_FRIENDS:
            return {
                friendsLoading: true,
                friends: null,
            };
        case actionTypes.GET_FRIENDS_SUCCESS:
            return {
                ...state,
                ...action.payload,
                friendsLoading: false,
            };
        case actionTypes.GET_FRIENDS_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}

export default reducer;

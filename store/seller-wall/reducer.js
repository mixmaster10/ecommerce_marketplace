import { actionTypes } from './action';

export const initialState = {
    formerPosts: [],
    seller: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.POST_MESSAGE_TO_WALL:
            return {
                ...state,
                message: action.payload,
            };
        case actionTypes.GET_SELLER_INFO:
            return {
                ...state,
            };
        case actionTypes.RECEIVE_SELLER_INFO:
            return {
                ...state,
                seller: action.payload,
            };
        case actionTypes.GET_SELLER_WALL_POSTS:
            return {
                ...state,
            };
        case actionTypes.RECEIVE_SELLER_WALL_POSTS:
            return {
                ...state,
                payload: action.payload,
            };
        case actionTypes.SELLER_POST_TO_WALL:
            return {
                ...state,
                currentPost: action.payload,
            };

        default:
            return state;
    }
}

export default reducer;

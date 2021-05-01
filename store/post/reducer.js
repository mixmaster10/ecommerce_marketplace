import { actionTypes } from './action';


export const initialState = {
    posts: [],
    featuredPost: null,
    recentPost: [],
    categories: [],
    error: false,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                ...state,
                ...{ posts: action.data },
            };
        case actionTypes.GET_FEATURED_POST_SUCCESS:
            return {
                ...state,
                ...{ featuredPost: action.data },
            };
        case actionTypes.GET_RECENT_POSTS_SUCCESS:
            return {
                ...state,
                ...{ recentPost: action.data },
            };
        case actionTypes.GET_POST_CATEGORIES_SUCCESS:
            return {
                ...state,
                ...{ categories: action.data },
            };

        case actionTypes.GET_POSTS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.GET_FEATURED_POST_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.GET_RECENT_POSTS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.GET_POST_CATEGORIES_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        default:
            return state;
    }
}

export default reducer;

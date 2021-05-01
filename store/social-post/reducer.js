import { actionTypes } from './action';
import update from 'immutability-helper';

export const initialState = {
    title: '',
    message: '',
    file: '',
    groups: [],
    link: '',
    allWallPosts: [],
    post: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CREATE_POST_TITLE:
            return {
                ...state,
                title: action.payload,
            };
        case actionTypes.CREATE_POST_MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        case actionTypes.CREATE_POST_FILE:
            return {
                ...state,
                file: action.payload,
            };
        case actionTypes.CREATE_POST_SELECT:
            return {
                ...state,
                groups: [...state.groups, action.payload],
            };
        case actionTypes.CREATE_POST_LINK:
            return {
                ...state,

                link: action.payload,
            };
        case actionTypes.CREATE_POST_PUBLISH:
            return {
                ...state,
                post: action.payload,
            };
        case actionTypes.GET_ALL_POSTS:
            return {
                ...state,
            };
        case actionTypes.RECEIVE_WALL_POSTS:
            return {
                ...state,
                allWallPosts: [action.payload],
            };
        case actionTypes.TOGGLE_LIKE:
            return {
                ...state,
                allWallPosts: state.allWallPosts.map((post, i) =>
                    i === 1
                        ? {
                              ...post,
                              likes_count: action.payload,
                          }
                        : post
                ),
            };
        default:
            return state;
    }
}

export default reducer;

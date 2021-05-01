import { actionTypes } from './action';

let initialState = {
    user: {},
    feed: [],
};

export default function user(state = null, action) {
    switch (action.type) {
        case actionTypes.LOAD_USER_DATA:
            return {
                    feed: action.payload.posts,
                    handle: {
                        firstName: action.payload.first_name,
                        lastName: action.payload.last_name,
                        avatar: action.payload.avatar.url,
                        id: action.payload._id
                    },
                    meta: {
                        friends: action.payload.followed_users,
                        followers: action.payload.users_following,
                        groups: action.payload.joined_groups,
                        stores: action.payload.followed_sellers,
                        backgroundImg: action.payload.background_img.url
                    }
                    };

        case actionTypes.ADD_POST:
            return {
                ...state,
                feed: [action.payload, ...state.feed],
            };
        default:
            return state;
    }
}

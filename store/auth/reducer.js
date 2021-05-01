import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
    credentials: {},
};
console.log('credentials', initState.credentials);

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true },
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: false },
            };
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                credentials: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;

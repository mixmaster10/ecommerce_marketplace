import { actionTypes } from './action';

export const initCart = {
    compareItems: [],
    compareTotal: 0,
};

function reducer(state = initCart, action) {
    switch (action.type) {
        case actionTypes.GET_COMPARE_LIST_SUCCESS:
            return {
                ...state,
                ...{ cart: action.data },
            };
        case actionTypes.UPDATE_COMPARE_LIST_SUCCESS:
            return {
                ...state,
                ...{
                    compareItems: action.payload.compareItems,
                    compareTotal: action.payload.compareTotal,
                },
            };
        case actionTypes.GET_COMPARE_LIST_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        default:
            return state;
    }
}

export default reducer;

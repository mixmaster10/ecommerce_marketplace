import { actionTypes } from './action';

export const initialState = {
    user: {},
    suggestedStores: [],
    topBrands: [],
    popularStores: [],
    storeCategories: [],
    yourStores: [],
    storesLoading: false,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_STORES:
            return {
                storesLoading: true,
                stores: null,
            };
        case actionTypes.GET_STORES_SUCCESS:
            return {
                ...state,
                ...action.payload,
                storesLoading: false,
            };
        case actionTypes.GET_STORES_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}

export default reducer;

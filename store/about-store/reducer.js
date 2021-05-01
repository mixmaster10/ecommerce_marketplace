import { actionTypes } from './action';

export const initialState = {
    id: null,
    info: {},
    data: {},
    meta: {},
    products: [],
    posts: [],
    videos: [],
    events: [],
    similarStores: [],
    sellerLoading: true,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_SELLERS:
            return {
                sellersLoading: true,
                seller: null,
            };
        case actionTypes.GET_SELLERS_SUCCESS:
            return {
                ...state,
                ...action.payload,
                sellersLoading: false,
            };
        case actionTypes.GET_SELLERS_ERROR:
            return {
                ...state,
                error: action.error,
            };
        case actionTypes.GET_SELLER_BY_ID:
            return {
                sellerLoading: true,
                seller: null,
            };
        case actionTypes.GET_SELLER_BY_ID_SUCCESS:
            return {
                ...state,
                ...action.payload,
                sellerLoading: false,
            };
        case actionTypes.GET_SELLER_BY_ID_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;

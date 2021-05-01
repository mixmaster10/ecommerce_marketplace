import sellerData from '../../db/aboutStorePageDummyData.json';
import axios from 'axios';

export const actionTypes = {
    GET_SELLERS: 'GET_SELLERS',
    GET_SELLER_BY_ID: 'GET_SELLER_BY_ID',
    GET_SELLER_SUCCESS: 'GET_SELLER_SUCCESS',
    GET_SELLER_ERROR: 'GET_SELLER_ERROR',
    GET_SELLER_BY_ID_SUCCESS: 'GET_SELLER_BY_ID_SUCCESS',
    GET_SELLER_BY_ID_ERROR: 'GET_SELLER_BY_ID_ERROR',
};

export function getSellers(payload) {
    return { type: actionTypes.GET_SELLERS, payload: sellerData };
}

export function getSellerById(id) {
    try {
        const api = sellerData.sellers;
        const data = api.find((seller) => seller.id === id);
        // const { data } = await axios.get('');

        return { type: actionTypes.GET_SELLER_BY_ID_SUCCESS, payload: data };
    } catch (error) {
        return {
            type: actionTypes.GET_SELLER_BY_ID_ERROR,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        };
    }
}

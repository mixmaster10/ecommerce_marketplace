import storeData from '../../pages/stores/storeData.json';

export const actionTypes = {
    GET_STORES: 'GET_STORES',
    GET_STORES_SUCCESS: 'GET_STORES_SUCCESS',
    GET_STORES_ERROR: 'GET_STORES_ERROR',
};

export function getStores() {
    try {
        const data = storeData;
        return { type: actionTypes.GET_STORES_SUCCESS, payload: data };
    } catch (error) {
        return {
            type: actionTypes.GET_STORES_ERROR,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        };
    }
}

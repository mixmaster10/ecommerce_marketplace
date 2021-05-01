import { all, put, takeEvery, call } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import storeData from '../../db/aboutStorePageDummyData';

import {
    actionTypes,
    getSellersSuccess,
    getSellersError,
    getSellerByIdSuccess,
    getSellerByIdError,
} from './action';
import { isStaticData } from '../../utilities/app-settings';
polyfill();

function* getSellers({ payload }) {
    try {
        if (isStaticData === false) {
            const data = yield call(storeData, payload);
            yield put(getSellersSuccess(data));
        } else {
            const data = yield call(storeData);
            yield put(getSellersSuccess(data));
        }
    } catch (err) {
        yield put(getSellersError(err));
    }
}

function* getSellerById({ payload }) {
    try {
        if (isStaticData === false) {
            const data = yield call(storeData(), payload);
            yield put(getSellerByIdSuccess(data));
        } else {
            const data = yield call(storeData);
            yield put(getSellerByIdSuccess(data));
        }
    } catch (err) {
        yield put(getSellerByIdError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_SELLERS, getSellers)]);
    yield all([takeEvery(actionTypes.GET_SELLER_BY_Id, getSellerById)]);
}

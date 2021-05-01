import { put, takeEvery, call } from 'redux-saga/effects';
import { GraphQLClient } from 'graphql-request';

import { helpers } from '../../helpers/home-page/functions'

const endpoint = process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT;
const graphQLClient = new GraphQLClient(endpoint);

function* loadUserDataAsync(user) {

    yield put({type: 'LOAD_USER_DATA_ASYNC', payload: user})
}

export default function* LoadUserDataSaga(user) {
    yield takeEvery('LOAD_USER_DATA_SAGA', loadUserDataAsync(user))
}
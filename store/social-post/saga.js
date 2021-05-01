const axios = require('axios');

// import {
//     queryGetSellerStore,
//     getPost,
//     getAllPostsGQL,
// } from './graphql/queries';
import { GraphQLClient } from 'graphql-request';
import {
    all,
    call,
    fork,
    put,
    takeEvery,
    takeLatest,
} from 'redux-saga/effects';
import { helpers } from '../../helpers/seller-wall/functions';
import { actionTypes, postNewPost, receiveWallPosts } from './action';
// const endpoint = process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT;
const endpoint = 'http://ecom-mysql.api.bluejestic.local/graphql';
const graphQLClient = new GraphQLClient(endpoint);

function* getAllPostsSaga() {
    const data = yield call(helpers.getWallPosts);

    yield put(receiveWallPosts(data));

    // const data = yield call(request, endpoint, getAllPostsGQL);
}
function* createNewPost({ payload }) {
    yield call(helpers.publishPost, payload);
}

function* getNewPostSaga(post) {
    const variables = {
        id: post.createPost.post.id,
    };

    const data = yield graphQLClient
        .request(getPost, variables)
        .then((response) => {
            return response;
        })
        .catch((err) => console.error(err));

    yield call(postNewPost, data);
}

function* toggleLikeSaga(post) {
    console.log('post ', post);
}
export function* watchCreateNewPost() {
    yield takeEvery(actionTypes.CREATE_POST_PUBLISH, createNewPost);
}

export function* watchToggleLikeSaga() {
    yield takeLatest(actionTypes.TOGGLE_LIKE, toggleLikeSaga);
}
export default function* rootSaga() {
    yield all([
        getAllPostsSaga(),
        fork(watchCreateNewPost),
        fork(watchToggleLikeSaga),
    ]);
}

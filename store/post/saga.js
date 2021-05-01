import { all, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';

import blogGrid from '../../public/static/data/blog-grid';

import {
    actionTypes,
    getPostsSuccess,
    getFeaturedPostSuccess,
    getPostCategoriesSuccess,
    getRecentPostsSuccess,
    getPostsError,
    getRecentPostsError,
    getFeaturedPostError,
    getPostCategoriesError,
} from './action';

polyfill();

function* getPostsSaga() {
    try {
        const data = blogGrid.posts;
        yield put(getPostsSuccess(data));
    } catch (err) {
        yield put(getPostsError(err));
    }
}

function* getFeaturedPostSaga() {
    try {
        const data = blogGrid.postFeatures;
        yield put(getFeaturedPostSuccess(data));
    } catch (err) {
        yield put(getFeaturedPostError(err));
    }
}
function* getRecentPostSaga() {
    try {
        const data = blogGrid.recentPosts;
        yield put(getRecentPostsSuccess(data));
    } catch (err) {
        yield put(getRecentPostsError(err));
    }
}

function* getPostCategories() {
    try {
        const data = blogGrid.blogCategories;
        yield put(getPostCategoriesSuccess(data));
    } catch (err) {
        yield put(getPostCategoriesError(err));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(actionTypes.GET_POSTS, getPostsSaga),
        takeEvery(actionTypes.GET_FEATURED_POST, getFeaturedPostSaga),
        takeEvery(actionTypes.GET_RECENT_POSTS, getRecentPostSaga),
        takeEvery(actionTypes.GET_POST_CATEGORIES, getPostCategories),
    ]);
}

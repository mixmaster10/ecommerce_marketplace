import { notification } from 'antd';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { helpers } from '../../helpers/auth/helpers';
import { loadUserData } from '../user/action';
import { actionTypes, loginSuccess, logOutSuccess } from './action';

let error = '';
let message = '';
const modalSuccess = (type) => {
    notification[type]({
        message: 'Wellcome back',
        description: message,
    });
};

const modalWarning = (type) => {
    notification[type]({
        message: 'Goodbye!',
        description: 'Your have been logged out!',
    });
};
const modalError = (type) => {
    notification[type]({
        message: 'Error!',
        description: error,
    });
};

function* loginSaga({ payload }) {
    try {
        let user = yield call(helpers.login, payload);
        console.log('auth/saga.js loginSaga() user => ', user);
        if (!user.user) {
            error = user;
            modalError('warning');
            throw user;
        } else {
            localStorage.setItem('user', user.jwt);
            yield put(loginSuccess(user));
            yield put(loadUserData(user.user));
            message = `Welcome back, ${user.user.first_name}!`;
            modalSuccess('success');
        }
    } catch (err) {
        console.error(err);
    }
}

function* logOutSaga() {
    try {
        yield put(logOutSuccess());
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}

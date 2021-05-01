import { all } from 'redux-saga/effects';
import AuthSaga from './auth/saga';
import CartSaga from './cart/saga';
import CollectionSaga from './collection/saga';
import CompareSaga from './compare/saga';
import PostSaga from './post/saga';
import ProductSaga from './product/saga';
import SettingSaga from './setting/saga';
import WishlistSaga from './wishlist/saga';

export default function* rootSaga() {
    yield all([
        PostSaga(),
        ProductSaga(),
        SettingSaga(),
        CartSaga(),
        AuthSaga(),
        CompareSaga(),
        WishlistSaga(),
        CollectionSaga(),
        // LoadUserDataSaga(),
        // SellerWallSaga(),
        // SocialPostSaga(),
    ]);
}

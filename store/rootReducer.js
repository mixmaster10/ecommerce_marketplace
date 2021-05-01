import { combineReducers } from 'redux';
import post from './post/reducer';
import product from './product/reducer';
import setting from './setting/reducer';
import cart from './cart/reducer';
import compare from './compare/reducer';
import auth from './auth/reducer';
import wishlist from './wishlist/reducer';
import collection from './collection/reducer';
import user from './user/reducer';
import aboutStore from './about-store/reducer';
import sellerWall from './seller-wall/reducer';
import socialPost from './social-post/reducer';
import stories from './homePage/stories/reducer';
import friends from './friends/reducer';
import widgetPhotos from './user/photosWidget/reducer';
import stores from './stores/reducer';

export default combineReducers({
    auth,
    post,
    product,
    setting,
    cart,
    compare,
    wishlist,
    collection,
    user,
    aboutStore,
    sellerWall,
    socialPost,
    stories,
    friends,
    widgetPhotos,
    stores,
});

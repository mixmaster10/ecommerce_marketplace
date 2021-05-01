import { GraphQLClient, request } from 'graphql-request';
import { all, call, put } from 'redux-saga/effects';
import { receiveSellerWallPosts } from './action';
import { mutationSellerPost } from './graphql/mutations';
import { queryGetSellerStore } from './graphql/queries';

function* getSellerWallPost() {
    try {
        const data = yield call(
            request,
            'http://ecom-mysql.api.bluejestic.local/graphql',
            queryGetSellerStore
        );

        yield put(receiveSellerWallPosts(data));
    } catch (err) {
        console.error('Some error', err);
    }
}
function* sellerWallPost(post) {
    let variables = {
        input: {
            data: {
                message: post.payload,
            },
        },
    };
    try {
        const endpoint = 'http://ecom-mysql.api.bluejestic.local/graphql';
        const graphQLClient = new GraphQLClient(endpoint);
        let data = graphQLClient
            .request(mutationSellerPost, variables)
            .then((data) => {
                return data;
            })
            .then((res) => {
                return res;
            })
            .catch((err) => console.error('err', err));
    } catch (err) {
        console.error('Some error', err);
    }
}

// function* sellerCreateNewPost({ payload }) {
//     console.log('sellerCreateNewPost post', payload);
//     let variables = {
//         input: {
//             data: {
//                 message: payload.description,
//                 title: payload.title,
//                 resource: {
//                     url: payload.link,
//                     file: {
//                         url: payload.file,
//                     },
//                 },
//             },
//         },
//     };
//     try {
//         const endpoint = 'http://ecom-mysql.api.bluejestic.local/graphql';
//         const graphQLClient = new GraphQLClient(endpoint);
//         let data = graphQLClient
//             .request(mutationSellerPost, variables)
//             .then((data) => {
//                 console.log('data', data);
//                 return data;
//             })
//             .then((res) => {
//                 console.log('res', res);
//                 return res;
//             })
//             .catch((err) => console.error('err', err));
//         console.log('fullilled data', data);
//     } catch (err) {
//         console.error('Some error', err);
//     }
// }

// export function* watchSellerCreateNewPost() {
//     yield takeEvery(
//         actionTypes.SELLER_CREATE_POST_PUBLISH,
//         sellerCreateNewPost
//     );
// }
// export function* watchSellerPost() {
//     yield takeEvery(actionTypes.SELLER_POST_TO_WALL, sellerWallPost);
// }
export default function* rootSaga() {
    yield all([
        getSellerWallPost(),
        // fork(watchSellerPost),
        // fork(watchSellerCreateNewPost),
    ]);
}

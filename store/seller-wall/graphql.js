import { gql } from 'graphql-request';

export const getSellerStores = gql`
    {
        sellerStores {
            id
            store_name
            seller_email
            store_name
            display_name
            store_icon {
                url
            }
            users_followings {
                username
                email
            }
        }
    }
`;

export const sellerPost = gql`
    mutation createPost($input: createPostInput) {
        createPost(input: $input) {
            post {
                message
                id
                title
            }
        }
    }
`;

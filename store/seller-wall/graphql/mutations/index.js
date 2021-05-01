import { gql } from 'graphql-request';

export const mutationSellerPost = gql`
    mutation createPost($input: createPostInput) {
        createPost(input: $input) {
            post {
                message
                id
            }
        }
    }
`;

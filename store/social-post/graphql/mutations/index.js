import { gql } from 'graphql-request';

export const mutationPost = gql`
    mutation createPost($input: createPostInput) {
        createPost(input: $input) {
            post {
                message
                title
                id
            }
        }
    }
`;

export const mutationToggleLikeOfPost = gql`
    mutation 
`;

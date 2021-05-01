import { gql } from 'graphql-request';

export const queryGetSellerStore = gql`
    {
        sellerStore(id: "5fdfc769cbe9977aef7a7565") {
            id
            store_name
            seller_email
            display_name
            followers_count
            store_addresses {
                id
                state
                city
                zipcode
                street_address_1
                street_address_2
            }
            my_groups {
                id
                group_name
            }
            users_followings {
                id
                email
                username
                first_name
                last_name
                liked_posts {
                    id
                    message
                }
            }
            ...sellerLogos
        }
    }

    fragment sellerLogos on SellerStore {
        store_logo {
            id
            url
        }
        store_icon {
            id
            url
        }
    }
    # {
    #     sellerStores {
    #         id
    #         store_name
    #         seller_email
    #         store_name
    #         display_name
    #         store_icon {
    #             url
    #         }
    #         users_followings {
    #             username
    #             email
    #         }
    #     }
    # }
`;

import {gql} from '@apollo/client';

export const GET_ALL_ALBUMS = gql`{
    posts(where: {categoryName: "album"}) {
        edges {
            node {
                id
                title
                content
                featuredImage {
                    node {
                        id
                    }
                }
            }
        }
    }
}
`
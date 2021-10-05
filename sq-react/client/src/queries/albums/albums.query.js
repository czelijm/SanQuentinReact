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
                        id,
                        sourceUrl
                    }
                }
            }
        }
    }
}
`

// export const GET_NEWS_BY_ID = //(newsId) => (
//     gql`
//         query Post($id: ID!)
//         {
//             post(id: $id) {
//                 id
//                 title
//                 content
//             }
//         }
//     `
// // )
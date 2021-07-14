import {gql} from '@apollo/client';


export const GET_ALL_FRIENDS = gql`{
    posts(where: {categoryName: "friends"}) {
        edges {
            node {
                id
                title
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
                content
            }
        }
    }
}`

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
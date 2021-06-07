import {gql} from '@apollo/client';

export const GET_ALL_BANDMEMBERS = gql`
    query {
        posts(where: {categoryName: "bandmember"}) {
            edges {
                node {
                    id
                    title
                    featuredImage{
                        node{
                            sourceUrl
                        }
                    }
                    content
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
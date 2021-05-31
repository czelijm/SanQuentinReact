import {gql} from '@apollo/client';


export const GET_ALL = gql`
    {
        posts {
            edges {
                node {
                    id
                    title
                    content
                    featuredImage {
                        node {
                            id
                            sourceUrl
                        }
                    }
                    categories {
                        edges {
                            node {
                                id
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`

export const GET_ALL_NEWS = gql`
    query {
        posts(where: {categoryName: "news"}) {
            edges {
                node {
                    id
                    title
                    featuredImage {
                        node {
                            id
                            sourceUrl
                        }
                    }
                    categories {
                        edges {
                            node {
                                id
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`

export const GET_NEWS_BY_ID = //(newsId) => (
    gql`
        query Post($id: ID!)
        {
            post(id: $id) {
                id
                title
                content
            }
        }
    `
// )
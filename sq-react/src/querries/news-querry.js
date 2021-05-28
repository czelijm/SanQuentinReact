import {gql} from '@apollo/client';


export const getAllNews = gql`
    {
        posts {
            edges {
            node {
                id
                title
                author{
                node{
                    name
                }
                }
            }
            }
        }
    }
`

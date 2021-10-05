import {gql} from '@apollo/client';

export const GET_GALLERY = gql`{
    pageBy(uri: "gallery") {
      title
      content(format: RENDERED)
    }
}
`
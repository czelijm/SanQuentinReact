import {gql} from '@apollo/client';

export const GET_SOCIAL_MEDIA = gql`{
    pageBy(uri: "socialmedia") {
      content(format: RENDERED)
    }
}
`
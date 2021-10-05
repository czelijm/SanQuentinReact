import {gql} from '@apollo/client';

export const GET_HOME_PAGE_LARGE = gql`{
    pageBy(uri: "hpl") {
      content(format: RENDERED)
    }
}
`
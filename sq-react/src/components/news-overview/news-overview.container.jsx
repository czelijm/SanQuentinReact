import React from 'react';
import {useQuery} from '@apollo/client'

import {NewsOverviewContainerDiv} from './news-overview.styles'

import {getAllNews} from '../../querries/news-querry'
// import { Spinner } from 'react-bootstrap';
import SpinnerAbsolute from '../spinner/spinner.component'

const NewsOverviewContainer = () =>{
    const { loading, error, data } = useQuery(getAllNews);

    if (loading) return <SpinnerAbsolute/>;
    if (error) {console.log(error); return( <p>Error :(</p>)};
    const posts = data.posts.edges;

    console.log(posts);
    const postsArray = posts.map(p=>p.node.title);
    console.log(postsArray);

    return(
        <NewsOverviewContainerDiv>
           {postsArray.map(p=>(
               <div>
                   {p}
               </div>
           ))}
        </NewsOverviewContainerDiv>
    )};

export default NewsOverviewContainer;


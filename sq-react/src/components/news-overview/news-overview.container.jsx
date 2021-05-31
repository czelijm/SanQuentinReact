import React from 'react';
import {useQuery} from '@apollo/client'

import {NewsOverviewContainerDiv} from './news-overview.styles'

import {GET_ALL_NEWS} from '../../querries/news/news.querry'
// import { Spinner } from 'react-bootstrap';s
import SpinnerAbsolute from '../spinner/spinner.component'
import { getAllNewsDataFromResponse } from '../../querries/news/news.process-data';
import NewsItem from '../news-item/news-item.component';

const NewsOverviewContainer = () =>{
    const { loading, error, data } = useQuery(GET_ALL_NEWS);
    // const newsById = useQuery(GET_NEWS_BY_ID,{variables:{id:'cG9zdDoxNQ=='}});
    
    if (loading) return <SpinnerAbsolute/>;
    if (error) {console.log(error); return( <p>Error :(</p>)};
    
    const postsArray = getAllNewsDataFromResponse(data);
    
    console.log(postsArray);
    // console.log(newsById);

    return(
        <NewsOverviewContainerDiv>
            {postsArray.map(p=>(
                <NewsItem key={p.id} item={p}/>
                
            ))}
        </NewsOverviewContainerDiv>
    )};

export default NewsOverviewContainer;


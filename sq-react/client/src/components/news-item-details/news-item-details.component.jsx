import React from 'react';
import {Redirect, useParams} from 'react-router-dom';
import {useQuery} from '@apollo/client'
import { GET_NEWS_BY_ID } from '../../queries/news/news.query';
import SpinnerAbsolute from '../spinner/spinner.component';
import { getNewsDataFromResponse } from '../../queries/news/news.process-data';
import { HtmlContentDiv, NewsDetailsBackgroundPlate,NewsDetailsTitle } from './news-item-details.styles';


const NewsItemDetails = ({match}) => {

    const {newsId} = useParams(); 
    const { loading, error, data } = useQuery(GET_NEWS_BY_ID, {variables:{id:newsId}});
    // const { loading, error, data } = useQuery(GET_NEWS_BY_ID,{variables:{id:'cG9zdDoxNQ=='}});
    
    if (loading) return <SpinnerAbsolute/>;
    if (error) return <Redirect to={'/404'}/>    

    const postContent = getNewsDataFromResponse(data);

    // console.log(postContent);

    return(
    <NewsDetailsBackgroundPlate>
        {/* {match.params.newsId} */}
        <NewsDetailsTitle>{postContent.title}</NewsDetailsTitle>
        {/* <br/> */}
        <HtmlContentDiv dangerouslySetInnerHTML={{ __html: postContent.content }} />
    </NewsDetailsBackgroundPlate>
)}

export default NewsItemDetails;
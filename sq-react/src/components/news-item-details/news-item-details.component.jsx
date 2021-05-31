import React from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from '@apollo/client'
import { GET_NEWS_BY_ID } from '../../querries/news/news.querry';
import SpinnerAbsolute from '../spinner/spinner.component';
import { getNewsDataFromResponse } from '../../querries/news/news.process-data';


const NewsItemDetails = ({match}) => {

    const {newsId} = useParams(); 
    const { loading, error, data } = useQuery(GET_NEWS_BY_ID, {variables:{id:newsId}});
    // const { loading, error, data } = useQuery(GET_NEWS_BY_ID,{variables:{id:'cG9zdDoxNQ=='}});
    
    if (loading) return <SpinnerAbsolute/>;
    if (error) {console.log(error); return( <p>Error :(</p>)};    

    const postContent = getNewsDataFromResponse(data);

    console.log(postContent);

    return(
    <div>
        {/* {match.params.newsId} */}
        <h2>{postContent.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: postContent.content }} />
    </div>
)}

export default NewsItemDetails;
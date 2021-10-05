import React from 'react';
import {Route} from 'react-router-dom'
import NewsItemDetails from '../../components/news-item-details/news-item-details.component';

import NewsOverviewContainer from '../../components/news-overview/news-overview.container'

const NewsComponent = ({match}) => (
    <div className = 'news'>
        <Route exact path={`${match.path}`} component={NewsOverviewContainer}></Route>
        <Route path={`${match.path}/:newsId`} render={()=><NewsItemDetails/>}></Route>
        {/* <Route exact path={`${match.path}/:newsId`} component={<NewsItemDetails/>}></Route> */}
        {/* <NewsOverviewContainer></NewsOverviewContainer> */}
    </div>
)

export default NewsComponent;
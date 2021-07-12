import React from 'react';
import { Route } from 'react-router-dom';

import AlbumItemDetails from '../../components/album-item-details/album-item-details.component';
import AlbumsOverview from '../../components/albums-overview/albums-overview.component';

const AlbumsComponent = ({match}) => {
    
    return (
        <div>
            <Route exact path={`${match.path}`} component={AlbumsOverview}></Route>
            <Route path={`${match.path}/:albumId`} render={()=><AlbumItemDetails/>}></Route>
            {/* <AlbumsOverview/> */}
        </div>
    )
}

export default AlbumsComponent;
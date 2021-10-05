export const getItemsFromResponse = (res) => {
    return res.data.items;
}

export const getNextPageToken = (res) => {
    return res.data.nextPageToken;
}

export const getPervPageToken = (res) => {
    return res.data.prevPageToken;
}

export const getVideoIdFromItem = (item) => {
    return item.snippet.resourceId.videoId;
}

export const getVideoPropsFromItem = (item) => {
    return {
        id:item.snippet.resourceId.videoId,
        title:item.snippet.title,
        description: item.snippet.description,
        thumbnail:item.snippet.thumbnails.maxres?.url
    };
}

// export const getTrackPropsFromItem = (item) => {
//     return {
//         id:item.snippet.resourceId.videoId,
//         description: item.snippet.description,
//         thumbnail:item.snippet.thumbnails.maxres.url
//     };
// }

export const getVideosIdFromItems = (items) => {
    return items.map((item)=> getVideoIdFromItem(item));
};

export const getVideosPropsFromItems = (items) => {
    return items.map((item)=> getVideoPropsFromItem(item));
};

export const getVideosIdFromResponse = (res) => {
    return getVideosIdFromItems(getItemsFromResponse(res));
};

export const getVideosPropsFromResponse = (res) => {
    return getVideosPropsFromItems(getItemsFromResponse(res));
};





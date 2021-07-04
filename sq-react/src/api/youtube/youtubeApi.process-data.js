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

export const getVideosIdFromItems = (items) => {
    return items.map((item)=> getVideoIdFromItem(item));
};

export const getVideosIdFromResponse = (res) => {
    return getVideosIdFromItems(getItemsFromResponse(res));
};




import { getAllPostsFromResponse, getPostFromResponse } from "../posts/posts.process-data";

export const getAllAlbumsDataFromResponse = (response) => {
    return getAllPostsFromResponse(response);
}

export const getAlbumDataFromResponse = (response) => {
    return getPostFromResponse(response);
}

export const getJsonFromHtml = (data) =>{
    var mockHtml = document.createElement( 'html' );
    mockHtml.innerHTML = data;
    const playlistId = [...mockHtml.getElementsByTagName('p')].map(p=>p.innerText)[0]
    const iconArray = [...mockHtml.getElementsByTagName('img')].map(p=>p.src);
    const mediaPlatformsArray = [...mockHtml.getElementsByTagName('a')].map(p=>p.href);
    return {
        playlistId,
        iconArray,
        mediaPlatformsArray
    }
}

export const getJsonAlbumFormData = (data) => {
    const propsFromHtml = getJsonFromHtml(data.content);
    return {
        ...data,
        ...propsFromHtml
    }
} 

export const getAlbumsFromData = (data) => {
    return getJsonAlbumFormData(data);
}

export const getAlbumsFromResponse = (res) => {
    return getAllAlbumsDataFromResponse(res).map(i=>getJsonAlbumFormData(i));
}



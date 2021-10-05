import { getAllPostsFromResponse, getPostFromResponse } from "../posts/posts.process-data";

export const getAllFriendsDataFromResponse = (response) => {
    return getAllPostsFromResponse(response);
}

export const getFriendDataFromResponse = (response) => {
    return getPostFromResponse(response);
}

export const prepareFirend = (friend) => {
    var mockHtml = document.createElement( 'html' );
    mockHtml.innerHTML = friend.content;
    // const innerImage = mockHtml.getElementsByTagName('img')[0].currentSrc;
    //convert to array
    const descriptionArray = [...mockHtml.getElementsByTagName('p')].map(p=>p.innerText);
    return {
        ...friend,
        description:descriptionArray.join(' ')
    }
}

export const prepareFirends = (friends) => {
    return friends.map(f=>prepareFirend(f))
}


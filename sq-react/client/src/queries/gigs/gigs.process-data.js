import { getAllPostsFromResponse, getPostFromResponse } from "../posts/posts.process-data";

export const getAllGigsDataFromResponse = (response) => {
    return getAllPostsFromResponse(response);
}

export const getGigsDataFromResponse = (response) => {
    return getPostFromResponse(response);
}

export const prepareGig = (gig) =>{
    var mockHtml = document.createElement( 'html' );
    mockHtml.innerHTML = gig.content;
    // const innerImage = mockHtml.getElementsByTagName('img')[0].currentSrc;
    //convert to array
    const descriptionArray = [...mockHtml.getElementsByTagName('p')].map(p=>p.innerText);
    return {
        ...gig,
        descriptionArray
    }
}

export const prepareGigsArray = (gigs) => {
    return gigs.map(m=>prepareGig(m));
}

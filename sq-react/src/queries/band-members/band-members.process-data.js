import { getAllPostsFromResponse, getPostFromResponse } from "../posts/posts.process-data";

export const getAllBandMembersDataFromResponse = (response) => {
    return getAllPostsFromResponse(response);
}

export const getBandMemberDataFromResponse = (response) => {
    return getPostFromResponse(response.post);    
}

export const getTagElementArrayFromStringContent = (content,tag) => {
    
    var mockHtml = document.createElement( 'html' );
    mockHtml.innerHTML = content;
    
    return mockHtml.getElementsByTagName(tag);
}

export const prepareBandMember = (member) =>{
    var mockHtml = document.createElement( 'html' );
    mockHtml.innerHTML = member.content;
    const innerImage = mockHtml.getElementsByTagName('img')[0].src;
    //convert to array
    const descriptionArray = [...mockHtml.getElementsByTagName('p')].map(p=>p.innerText);
    return {
        ...member,
        innerImage,
        descriptionArray
    }
}

export const prepareBandMembersArray = (members) => {
    return members.map(m=>prepareBandMember(m));
}

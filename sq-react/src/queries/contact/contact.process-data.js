import { getAllPostsFromResponse, getPostFromResponse } from "../posts/posts.process-data";

export const getAllContactsDataFromResponse = (response) => {
    return getAllPostsFromResponse(response);
}

export const getContactsDataFromResponse = (response) => {
    return getPostFromResponse(response);
}

export const prepareContact = (contact) =>{
    var mockHtml = document.createElement( 'html' );
    mockHtml.innerHTML = contact.content;
    const image = mockHtml.getElementsByTagName('img')[0].src;
    // var image = mockHtml.getElementsByTagName('figure')[0];
    // image = image.getElementsByTagName('img')[0].currentSrc;
    
    // console.log(mockHtml);
    // console.log(mockHtml.getElementsByTagName('img')[0].src);

    // console.log(mockHtml.getElementsByTagName('figure')[0].getElementsByTagName('img')[0].currentSrc);

    //convert to array
    const descriptionArray = [...mockHtml.getElementsByTagName('p')].map(p=>p.innerText);
    const socialMediaPhotoArray = [...mockHtml.getElementsByTagName('img')].slice(1).map(i=>i.src);
    const socialMediaLinkArray = [...mockHtml.getElementsByTagName('a')].map(a=>a.innerHTML);


    return {
        ...contact,
        image,
        descriptionArray,
        socialMediaPhotoArray,
        socialMediaLinkArray
    }
}

export const prepareContactsArray = (contacts) => {
    return contacts.map(m=>prepareContact(m));
}

export const getContentFormResponse = (resp) =>{
    return resp.pageBy.content
}

export const getHtmlArrayFromData = (data) =>{
    var mockHtml = document.createElement( 'html' );
    mockHtml.innerHTML = data;
    // const arr = [...mockHtml.getElementsByTagName('img')].map(p=>p.innerText);
    // console.log(data);
    return [...mockHtml.getElementsByTagName('img')].map(i=>i.src);
}

export const getJsonArrayFromData = (data) =>{
    var mockHtml = document.createElement( 'html' );
    mockHtml.innerHTML = data;
    // const arr = [...mockHtml.getElementsByTagName('img')].map(p=>p.innerText);
    // console.log(data);
    return [...mockHtml.getElementsByTagName('img')].map(i=>convertToJsonObjectForLightbox(i.src,i.height,i.width));
}

export const getHtmlArrayFromResponse = (resp) =>{
    return getHtmlArrayFromData(getContentFormResponse(resp));
}

export const getJsonArrayFromResponse = (resp) =>{
    return getJsonArrayFromData(getContentFormResponse(resp));
}

export const convertToJsonObjectForLightbox= (src,height,width) => {
    return {
        src,
        // loading: 'lazy',
        height: Math.floor(height),
        width: Math.round(width)
    }
}
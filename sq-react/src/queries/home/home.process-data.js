export const getItemsFromRespone = (resp) =>{
    return getHtmlArrayFromData(getContentFormResponse(resp));
}

export const getContentFormResponse = (resp) =>{
    return resp.pageBy.content
}

export const getHtmlArrayFromData = (data) =>{
    var mockHtml = document.createElement( 'html' );
    mockHtml.innerHTML = data;
    const videos = [...mockHtml.getElementsByTagName('video')].map(v=>v.src);
    const images = [...mockHtml.getElementsByTagName('img')].map(i=>i.src);

    return videos.map((v,i)=>({video:v,'image':images[i]}));
}


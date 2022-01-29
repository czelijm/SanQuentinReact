export const getItemsFromRespone = (resp) =>{
    return getHtmlArrayFromData(getContentFormResponse(resp));
}

export const getContentFormResponse = (resp) =>{
    // console.log(resp.pageBy.content);
    return resp.pageBy.content
}

export const getHtmlArrayFromData = (data) =>{
    var mockHtml = document.createElement( 'html' );
    mockHtml.innerHTML = data;
    const videos = [...mockHtml.getElementsByTagName('video')].map(v=>v.src);
    const images = [...mockHtml.getElementsByTagName('img')].map(i=>i.src);
    const names = [...mockHtml.getElementsByTagName('p')].map(p=>p.innerText);
    // console.log(images);

    return videos.map((v,i)=>({video:v,'image':images[i],name:names[i]}));
}


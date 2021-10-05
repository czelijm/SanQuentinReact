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
    const images = [...mockHtml.getElementsByTagName('img')].map(i=>i.src);
    const anchors = [...mockHtml.getElementsByTagName('a')].map(a=>a.href);
    // console.log(anchors);

    return images.map((img,i)=>({'image':img,url:anchors[i]}));
}

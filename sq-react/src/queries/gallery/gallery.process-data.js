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

export const getHtmlArrayFromResponse = (resp) =>{
    return getHtmlArrayFromData(getContentFormResponse(resp));
}
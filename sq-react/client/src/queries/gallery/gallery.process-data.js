// import { height } from "@material-ui/system";
import { randomIntFromInterval } from "../../utilities/randomInt";

export const getContentFormResponse = (resp) =>{
    return resp.pageBy?.content
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
    // console.log([...mockHtml.getElementsByTagName('img')]);
    return [...mockHtml.getElementsByTagName('img')].map(i=>convertToJsonObjectForLightbox(i));
}

export const getHtmlArrayFromResponse = (resp) =>{
    return getHtmlArrayFromData(getContentFormResponse(resp));
}

export const getJsonArrayFromResponse = (resp) =>{
    return getJsonArrayFromData(getContentFormResponse(resp));
}

export const convertToJsonObjectForLightbox= (item) => {
    let {src,height,width}=item;
    height=height?height:randomIntFromInterval(280,640)
    return {
        src,
        // loading: 'lazy',
        height,//Math.floor(height),
        width: !width?randomIntFromInterval(280,3*height):width,//Math.round(width)
    }
}
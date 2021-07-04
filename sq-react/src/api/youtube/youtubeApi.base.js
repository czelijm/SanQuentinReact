import axios from 'axios';

export const getApiForUrl = (baseURL) => axios.create({baseURL});

export const prepareUrlAndGetApi = (baseURL,dataType,options={}) => axios.create({
  baseURL: prepareUrl(baseURL,dataType,options)
});


export const prepareUrl = (baseURL,dataType,options={}) => {
  let result = `${baseURL}/${dataType}?`;
  Object.keys(options).forEach(key=>
    // if(options.hasOwnProperty(key)){
      result = result.concat(key,'=',options[key],'&')
    // }
  );
  return result.slice(0,-1);
}


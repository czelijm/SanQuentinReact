export const getAllNewsDataFromResponse = (response) => {
    
    const posts = response.posts.edges;
    const postsArray = posts.map(p=> createPostJsonObject(p.node));
    return postsArray;
}

export const getNewsDataFromResponse = (response) => {
    return createPostJsonObject(response.post);
    
}

const createPostJsonObject = ({id,title,featuredImage,content}) => {
    return({
        id,
        title,
        content,
        'image': featuredImage?featuredImage.node.sourceUrl:undefined
    });
}
import { getAllPostsFromResponse, getPostFromResponse } from "../posts/posts.process-data";

export const getAllFriendsDataFromResponse = (response) => {
    return getAllPostsFromResponse(response);
}

export const getFriendDataFromResponse = (response) => {
    return getPostFromResponse(response);
}

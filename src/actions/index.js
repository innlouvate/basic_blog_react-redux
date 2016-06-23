import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const RootUrl = 'http://reduxblog.herokuapp.com/api/posts';
const API_Key = '?key=remain';

export function fetchPosts() {
  const request = axios.get(`${RootUrl}${API_Key}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props) {
  const request = axios.post(`${RootUrl}${API_Key}`, props);

  return {
    type: CREATE_POST,
    payload: request
  }
}

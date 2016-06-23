import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const RootUrl = 'http://reduxblog.herokuapp.com/api';
const API_Key = '?key=remain';

export function fetchPosts() {
  const request = axios.get(`${RootUrl}/posts${API_Key}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

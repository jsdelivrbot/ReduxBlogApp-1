// Axios is a Promised-based HTTP client for the browser and node
import axios from 'axios';

// URL template:  http://reduxblog.herokuapp.com/api/posts?key=1a2b3c
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';

// create unique API key
const API_KEY = '?1a2b3c';

// action type constants
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";

// action creator function that returns an object with all posts
export function fetchPosts() {

	const url = `${ROOT_URL}/posts/${API_KEY}`;

	const request = axios.get(url);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

// action creator function that sends a post from the form to the url
export function createPost(props) {

	// Using ES6 template strings (aka template literals)
	const url = `${ROOT_URL}/posts/${API_KEY}`;

	const request = axios.post(url, props);

	return {
		type: CREATE_POST,
		payload: request
	};
}

// action creator function that returns a blog post based on the
// specified id.
export function fetchPost(id) {

	// Using ES6 template strings (aka template literals)
	const url = `${ROOT_URL}/posts/${id}/${API_KEY}`;

	const request = axios.get(url);

	return {
		type: FETCH_POST,
		payload: request
	};
}

// action creator functions that deletes a blog post based on the
// specified id.
export function deletePost(id) {

	const url = `${ROOT_URL}/posts/${id}/${API_KEY}`;

	const request = axios.delete(url);

	return {
		type: DELETE_POST,
		payload: request
	};
}











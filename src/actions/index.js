import axios from 'axios';

// create unique API key
const API_KEY = '1a2b3c';

// URL template:  http://reduxblog.herokuapp.com/api/posts?key=1a2b3c
const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts?key=${API_KEY}`;

// action type constant
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";

// action creator function that returns an object
export function fetchPosts() {

	const url = ROOT_URL;

	const request = axios.get(url);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

// action creator that sends a post from the form
// to the url
export function createPost(props) {

	console.log('createPost props =', props);

	const request = axios.post(ROOT_URL, props);

	return {
		type: CREATE_POST,
		payload: request
	};
}
// Reducer handles fetchPosts action
// Saturday, 3/4/2017

import { FETCH_POSTS } from '../actions/index';

// all => an array representing a list of all blog posts
// post => the active post, default to null
const INITIAL_STATE = { all: [], post: null };

// define initial state as an empty object
export default function (state = INITIAL_STATE, action) {

	switch(action.type) {
		case FETCH_POSTS:
			// return application state with list of blog posts
			// { } => generate new object for state
			// ...state => take our current state
			// all: action.payload.data => add this property with 
			// blog posts to current state.
			return { ...state, all: action.payload.data };
	
		// for any unknown action, default returns previous state
		default: return state;
	}
}
// Route Configuration
// Sec. 6, Lec. 74
// Thursday, March 2, 2017

// routes.js will provide a mapping mechanism 
// to display specified components for each URL

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (

	// '/' refers to the root domain name
	// Ex) google.com/ => renders App

	//	Syntax: 
	//	whenever the user is at this path, show this component:
	// 		<Route path = "/" component = { insertName } />

	<Route path = "/" component = { App } >
		<IndexRoute component = { PostsIndex } />
		<Route path = "posts/new" component = { PostsNew } />
		<Route path = "posts/:id" component = { PostsShow } />
	</Route>
);

/* 	Example
	--------
	Nested Components under the root path

	// Simple functional component
	const Greeting = () => {
		return <div>Hey There</div>;
	};

	// Nested components
	// Greeting nested inside of App.  App needs to render Greeting.
	<Route path = "/" component = { App } >
		<Route path = "greet1" component = { Greeting } />
		<Route path = "greet2" component = { Greeting } />
		<Route path = "greet3" component = { Greeting } />
	</Route>
*/


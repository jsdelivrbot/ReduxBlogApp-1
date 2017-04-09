import React, { Component } from 'react';
import { connect } from 'react-redux';

// import fetchPosts action creator
import { fetchPosts } from '../actions/index';

import { Link } from 'react-router';

import {
	Col,
	Grid,
	Row
} from 'react-bootstrap';


class PostsIndex extends Component {

	// React will automatically call componentDidMount() when it is about to be
	// rendered to the DOM.  But it will only be called the first time, not
	// on subsequent re-renders.
	componentDidMount() {

		this.props.fetchPosts();
	}

	renderPosts() {

		return this.props.posts.map(post => {
			// only render posts that have a title and categories
			if(post.title && post.categories) {
				return (
					// need to add a key when render list in React
					<li className="list-group-item" key={post.id}>
						<span className="pull-xs-right">{post.categories}</span>
						<Link to={'posts/' + post.id }>
							<strong>{post.title}</strong>
						</Link>
					</li>
				);
			}
		});
	}

	render() {
		return (
			<div>
				<div className="text-xs-right index-button">
					<Link to="/posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				<div className="posts-title">
					<h3>Posts</h3>
				</div>
				<Grid>
					<Row className="posts-index-headers">
						<Col className="posts-title-header"
							 xs={6} md={6}>{'Title'}</Col>
						<Col className="posts-categories-header"
						     xs={6}  md={6}>{'Categories'}</Col>
					</Row>
				</Grid>
				<ul className="list-group">
					{ this.renderPosts() }
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all };
}


// More efficient syntax
// ----------------------
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// Connects a React component to a Redux store.

// [mapStateToProps(state, [ownProps]): stateProps]
/*	If this argument is specified, the component will subscribe to Redux store updates.
	That means that any time the store is updated, mapStateToProps will be called.

	Here, the PostsIndex component is not concerned with state, 
	so mapStateToProps = null
*/

// [mapDispatchToProps(dispatch, [ownProps]): dispatchProps]
/*
	Can be an object or a function.

		If object, each function inside it assumed to be a Redux action creator.

		If function, it will be given dispatch.

	It's up to me to return an object that somehow uses dispatch to
	bind action creators.

		Tip:  you can use bindActionCreators() helper in Redux


*/



/*	

More cumbersome syntax
-----------------------

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPosts }, dispatch);
}

// for connect(), first argument is usually mapStateToProps, 
// but doesn't exist here, so just put null
export default connect(null, mapDispatchToProps)(PostsIndex);

*/









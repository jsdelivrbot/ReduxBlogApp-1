import React, { Component } from 'react';
import { connect } from 'react-redux';

// import fetchPosts action creator
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

	// React will call this component automatically when it is about to be
	// rendered to the DOM.  But it will only be called the first time, not
	// on subsequent re-renders.
	componentDidMount() {

		this.props.fetchPosts();
		// console.log('Great place to call an action creator to fetch posts');
	}

	render() {
		return (
			<div>
				List of blog posts
			</div>
		);
	}
}


// More efficient syntax
// ----------------------

export default connect(null, { fetchPosts })(PostsIndex);


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









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









import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../actions/index';

class PostsUpdate extends Component {

	render() {

		const { post } = this.props;

		console.log('posts_update props = ', post);

		return (
			<h3>Inside Posts Update</h3>
		);
	}
}


function mapStateToProps(state) {
	return { post: state.posts.post };
}

export default connect(mapStateToProps, null)(PostsUpdate);
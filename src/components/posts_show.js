import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {

	// Lifecycle Method
	// When component is just about to render,
	// fetch the blog post with the specified id.
	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	render() {

		const { post } = this.props;

		// if no post data yet, show spinner
		if(!post) {
			return (
				<div className = "loader"></div>
			);
		}

		return (
			<div>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
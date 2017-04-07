import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {

	// PostsShow.contextTypes returns object below
	// Gives us access to router
	static contextTypes = {
		router: PropTypes.object
	};

	// Lifecycle Method
	// When component is just about to render,
	// fetch the blog post with the specified id.
	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	onDeleteClick = () => {
		this.props.deletePost(this.props.params.id)
		  .then(() => { this.context.router.push('/') });
	}

	render() {

		const { post } = this.props;

		// if no post data yet, show spinner
		if(!post) {
			return (
				<div className= "loader"></div>
			);
		}

		return (
			<div>
				<div>
					<div className= "posts-content-title">
						<h3>{post.title}</h3>
					</div>
					<h6>Categories: {post.categories}</h6>
					<p>{post.content}</p>
				</div>
				<div className="col-sm-2 form-buttons">
					<Link 
						to= "/"
						className="btn btn-primary btn-block">
						Back to Index
					</Link>
				</div>
				<div className="col-sm-2 form-buttons">
					<button 
						className="btn btn-danger btn-block"
						onClick= { this.onDeleteClick }>
						Delete Post
					</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost, updatePost } from '../actions/index';

import {
	Button,
	ButtonGroup,
	ButtonToolbar,
	Col,
	ControlLabel,
	FormControl,
	FormGroup
} from 'react-bootstrap';

import PostsUpdate from './posts_update';

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

	onUpdateClick = () => {

		//this.props.updatePost(this.props.post);

		let id = this.props.post.id;		
		this.context.router.push(`${id}/update`);

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
				<ButtonToolbar>
					<Button type="submit"
							bsStyle="primary">
				        <Link to= "/"
				        	  style={{ color: 'white', 'textDecoration':'none' }}>All Posts
			        	</Link>
			        </Button>
			        <Button bsStyle="danger"
		        			onClick= { this.onDeleteClick }>Delete Post
        			</Button>
			        <Button bsStyle="info"
		        			onClick= { this.onUpdateClick }>Update Post
        			</Button>
				</ButtonToolbar>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPost, deletePost, updatePost })(PostsShow);
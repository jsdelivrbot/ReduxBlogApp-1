import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createPost, deletePost } from '../actions/index';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router';

import {
	Button,
	ButtonGroup,
	ButtonToolbar,
	ControlLabel,
	FormControl,
	FormGroup
} from 'react-bootstrap';

// function to render each field
const renderField = ({ type, input, meta: { touched, error }, 
						placeholder, componentClass, label }) => {
	return(
		<div>
			<FormGroup
				controlId= {input.name}
				validationState= {touched ? 'error' : 'success'}>
				<ControlLabel className="form-label">{label}</ControlLabel>
				<FormControl 
					className= {input.name}
					type= {type}
					componentClass= {componentClass}
					placeholder= {placeholder}
					value= {input.value}
					onChange= {input.onChange}
				/>
				<div className="form-field-error">
					{error && touched && <span>{error}</span>}
				</div>
				<FormControl.Feedback />
			</FormGroup>
		</div>
	);
}

class PostsUpdate extends Component {

	// PostsNew.contextTypes returns object below
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit = (props) => {

		console.log('onSubmit props=', props)

		const updateData = {
			title: props.title,
			categories: props.categories,
			content: props.content
		}

		/*
		Heroku likely employs HTTP request limits.  Sometimes after createPost,
		deletePost, and then attempting to route to the index ('/'), I will
		receive HTTP Error 429 (too many requests).

		If this error occurs, the createPost and deletePost requests 
		will both have excecuted successfully.  But the GET request (fetchPosts) 
		associated with routing to the index page does not execute, and
		the index page does not automatically reload with the updated post. 

		I attempted to resolve this error by adding a setTimeout function to
		delay the routing.  Five seconds seems sufficient for most updates, but  
		it is not perfect.

		If the index page is not refreshed automatically, a hard refresh will
		show the updated post.  The deleted post will not appear.

		*/

		this.props.createPost(updateData)
			.then(() => { 
				this.props.deletePost(props.id)
					.then(() => {
						setTimeout(this.context.router.push('/'), 5000);
					})
					.catch(err => {
						console.log('ERROR:', err);
					})
					.then(() => {
						this.context.router.push('/');
					})
			});
	}


	// Component re-renders on any change in the form fields
	render() {

		const { handleSubmit, initialValues } = this.props;

		// console.log('PostsUpdate initialValues =', initialValues);

		return (
			<form onSubmit = { handleSubmit(this.onSubmit) }>
				<div className = "new-post-header">
					<h3>Update a Post</h3>
				</div>
				<Field
					name= "title"
					component= { renderField }
					type= "text"
					props= {{ label:'Title' }}
					placeholder= "Make it groovy">
				</Field>
				<Field
					name= "categories"
					component= { renderField }
					type= "text"
					props= {{ label:'Categories' }}
					placeholder= "Organize for later">
				</Field>
				<Field
					name= "content"
					component= { renderField }
					type= "textarea"
					props= {{ componentClass: 'textarea', label:'Content' }}
					placeholder= "Your thoughts matter">
				</Field>
				<ButtonToolbar>
					<Button type="submit"
							bsStyle="primary">Submit
			        </Button>
			        <Button bsStyle="danger">
		        		<Link to= "/"
		        			  style={{color: 'white', 'textDecoration':'none'}}>Cancel
	        			</Link>
        			</Button>
				</ButtonToolbar>
			</form>
		);
	}
}

// Form validation
const validate = values => {

	const errors = {};

	if(!values.title) {
		errors.title = 'Enter a groovy blog title.';
	}
	if(!values.categories) {
		errors.categories = 'Enter some categories.';
	}
	if(!values.content) {
		errors.content = 'No content, no submit.';
	}

	// return an object
	return errors;
}

function mapStateToProps(state) {

	// create initialValues object of properties that will populate
	// value property of Redux Field object.
	return { 
		initialValues: {
			id: state.posts.post.id,
			title: state.posts.post.title,
			categories: state.posts.post.categories,
			content: state.posts.post.content
		}
	};
}

PostsUpdate = reduxForm({
	form:'PostsUpdateForm',
	validate
})(PostsUpdate);

export default connect(mapStateToProps, { createPost, deletePost })(PostsUpdate);
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createPost, deletePost, fetchPosts } from '../actions/index';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router';

import {
	Button,
	ButtonGroup,
	ButtonToolbar,
	Col,
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

		// console.log('updateData = ', updateData);

		this.props.createPost(updateData)
			.then(() => { 
				this.props.deletePost(props.id)
			});

			/*
			.then(() => {
				this.context.router.push('/');
			})
			*/

		/* WORKS! but doesn't return you to index ('/')??
		this.props.createPost(updateData)
			.then(() => { 
				this.props.deletePost(props.id)
			});
		*/


		//this.context.router.push('/');
	}


	// component re-renders on any change in the form fields
	render() {

		const { handleSubmit, initialValues } = this.props;

		console.log('PostsUpdate initialValues =', initialValues);

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

export default connect(mapStateToProps, { createPost, deletePost, fetchPosts })(PostsUpdate);
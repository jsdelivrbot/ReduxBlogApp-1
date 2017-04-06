import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
	ControlLabel,
	FormControl,
	FormGroup
} from 'react-bootstrap';

// reduxForm object nearly identical to 'connect' function in redux library; 
// will use reduxForm to wrap PostsNew component
import { reduxForm, Field } from 'redux-form';

// action creator
import { createPost } from '../actions/index';

// link Cancel button back to posts ('/')
import { Link } from 'react-router';

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

// On form submit, call createPost action creator
// const doSubmit = values => createPost(values);

// Component the users see when they navigate 
// to create a new blog post.
class PostsNew extends Component {

	// PostsNew.contextTypes returns object below
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit = (props) => {
		this.props.createPost(props)
		  .then(() => { this.context.router.push('/') });
	}

	render() {

		// handleSubmit is a helper function provided by ReduxForm
		const { handleSubmit } = this.props;

		return (
			<form onSubmit = { handleSubmit(this.onSubmit) }>
				<div className = "new-post-header">
					<h3>Create a New Post</h3>
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
				<div className="col-sm-2 form-buttons">
					<input
						type="submit"
						className="btn btn-primary"
					/>
				</div>
				<div className="col-sm-2 form-buttons">
					<Link 
						to= "/"
						className="btn btn-danger">Cancel
					</Link>
				</div>
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


// PostsNew component wrapped by redux-form
PostsNew = reduxForm({ 
	form: 'PostsNewForm',
	validate
 })(PostsNew);

// PostsNew component then wrapped by redux 'connect'
export default connect(null, { createPost })(PostsNew);

// connect()
// first argument: mapStateToProps
// second argument: mapDispatchToProps

// form name => needs to be unique
// fields => reduxForm will watch for the inputs

// reduxForm injects helper function into this.props, inside the component
/*
	export default connect(null, {createPost})(reduxForm({
	form: 'PostsNewForm'})
	(PostsNew));
*/


// BEHIND THE SCENES:
// whenever user makes changes to a field,
// redux-form records those changes on the global application state:
/* 
		state === {
			// form is the reducer
			form: {
				PostsNewForm: {
					title: '...',
					categories: '...',
					content: '...'
				}
			}
		}

	instead of recording these properties on a component level, 
	redux-form is putting these properties directly onto the 
	application state.
*/



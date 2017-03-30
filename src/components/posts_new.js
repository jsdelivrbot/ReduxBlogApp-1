import React, { Component } from 'react';
import { connect } from 'react-redux';

// reduxForm object nearly identical to 
// 'connect' function in redux library; will use
// reduxForm to wrap PostsNew component
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions/index';

import {
	FormControl,
	FormGroup
} from 'react-bootstrap';

// Component users see when they navigate to URL `/posts/new`

class PostsNew extends Component {

	/*
	// Define stateless component to render input and errors

	// Defined outside of render() method, otherwise it will be 
	// recreated on every re-render, leading to slower performance.

	const renderField = (field) => (
	    <div className="input-row">
	      <input {...field.input} type="text"/>
	      {field.meta.touched && field.meta.error && 
	       <span className="error">{field.meta.error}</span>}
	    </div>
  	)
  	*/

  	/* Field component - 


  	*/

	render() {

		// const handleSubmit = this.props.handleSubmit
		// handleSubmit is a helper function from reduxForm
		// fields is a configuration object
		const { handleSubmit } = this.props;
		
		return (
			<form onSubmit= { handleSubmit(this.props.createPost) }>
				<h3> Create a New Post </h3>

				<div className= "form-group">
					<label>Title</label>
					<div className= "form-group">
						<Field
							name="title"
							component="input" />
							<FormControl
								type="text" 
								placeholder="Enter text"
							/>
						/>
					</div>
				</div>

				<div className= "form-group">
					<label>Categories</label>
					<Field
						name="categories"
						component="input"
						type="text" />
				</div>

				<div className= "form-group">
					<label>Content</label>
					<Field
						name="content"
						component="input"
						type="textarea" />
				</div>

				<button
					type= "submit"
					className= "btn btn-primary">Submit
				</button>
			</form>
		);
	}
}


// connect()
// first argument: mapStateToProps
// second argument: mapDispatchToProps

// form name => needs to be unique
// fields => reduxForm will watch for the inputs

// reduxForm injects helper function into this.props, inside the component
export default connect(null, {createPost})(reduxForm({
	form: 'PostsNewForm'})
	(PostsNew));

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

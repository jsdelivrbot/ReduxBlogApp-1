import React, { Component } from 'react';
import { connect } from 'react-redux';

// reduxForm object nearly identical to 
// 'connect' function in redux library; will use
// reduxForm to wrap PostsNew component
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions/index';

/*
import {
	ControlLabel,
	FormControl,
	FormGroup
} from 'react-bootstrap';
*/

import PostsForm from './posts_form';

const doSubmit = data => createPost(data);

// Stateless functional component that users see when 
// they navigate to the URL '/posts/new'
let PostsNew = props => (

	<form onSubmit = { props.handleSubmit(doSubmit) }>
		<div className="form-group">
			<label>Title</label>
			<Field
				name= "title"
				component= "input"
				type= "text"
				placeholder= "Add a title for your post"
			/>
		</div>
		<div className="form-group">
			<Field
				name= "categories"
				component= {PostsForm}
				type= "text"
				placeholder= "Add categories for your post">Categories
			</Field>
		</div>
		<button type= "submit" > Submit </button>
	</form>
)

// PostsNew component wrapped by redux-form:
PostsNew = reduxForm({ form: 'PostsNewForm' })(PostsNew);

export default PostsNew;

// connect()
// first argument: mapStateToProps
// second argument: mapDispatchToProps

// form name => needs to be unique
// fields => reduxForm will watch for the inputs

// reduxForm injects helper function into this.props, inside the component
/*export default connect(null, {createPost})(reduxForm({
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




		// const handleSubmit = this.props.handleSubmit
		// handleSubmit is a helper function from reduxForm
		// fields is a configuration object
	
		// console.log('Posts New props =', this.props);


		/*  Draft Version -> created PostsForm component
		return (

			<div>
				<h3> Create a New Post </h3>
				<div className= "form-group">
					<Field
						name= "title"
						component={PostsForm}
					/>
					<button
						type= "submit"
						//onSubmit = { handleSubmit(this.props.createPost) }
						className= "btn btn-primary">Submit
					</button>
				</div>
			</div>
		);
		*/
		
		/*
		return (
			<form onSubmit= { handleSubmit(this.props.createPost) }>
				<h3> Create a New Post </h3>

				<div className= "form-group">
					<Field
						name="title"
						component={PostsForm}
					/>
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
			*/

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

/*
	Tried to link to a custom react component with react bootstrap,
	but couldn't figure out how to pass the value of the input box
	back up to the Field component.  Will abandon for later.
		<Field
			name= "categories"
			component= { PostsForm }
		/>
*/

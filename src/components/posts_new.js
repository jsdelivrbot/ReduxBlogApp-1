import React, { Component } from 'react';
import { connect } from 'react-redux';
// nearly identical to 'connect' function in redux library
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions/index';

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

	render() {

		console.log('PostsNew props = ', this.props);
		const { handleSubmit } = this.props;

		return (
			<form onSubmit= { handleSubmit(this.props.createPost) }>
				<h3> Create a New Post </h3>

				<div className= "form-group">
					<label>Title</label>
					<Field
						name="title"
						component="input"
						type="text" />
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
export default connect(null, {createPost})(reduxForm({form: 'PostsNewForm'})(PostsNew));

// when user makes changes a field,
// redux-form records those changes on application state:
/* 
		state === {
			form: {
				PostsNewForm: {
					title: '...',
					categories: '...',
					content: '...'
				}
			}
		}

	instead of recording these properties on a component level, 
	like in the past, redux-form is putting these properties
	directly onto the application state.
*/

/*


				<div className= "form-group">
					<label>Categories</label>
					<input type="text" 
					       className="form-control"/>
				</div>

				<div className = "form-group">
					<label>Content</label>
					<textarea className="form-control"/>
				</div>
*/
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

// import PostsForm from './posts_form';

// Component users see when they navigate to URL `/posts/new`

/*
class PostsNew extends Component {

	render() {

		const { handleSubmit } = this.props;

		<form onSubmit= { handleSubmit }>
			<Field
				name="title"
				component="input"
				type="text"
			/>
			<input type="submit" value='Submit' />
		</form>
	}
}
*/

// Stateless Function

const doSubmit = data => createPost(data);

let PostsNew = props => (

	<form onSubmit = { props.handleSubmit(doSubmit) }>
		<Field
			name= "title"
			component= "input"
			type= "text"
			placeholder= "Add title of post"
		/>
		<button type= "submit" > Submit </button>
	</form>
)

// PostsNew component wrapped by redux-form:
PostsNew = reduxForm({ form: 'PostsNewForm' })(PostsNew);

export default PostsNew;

/*
connect(
	state => ({

	}),
	dispatch => ({
		onSubmit: data => dispatch(createPost(data));
	})
)(myReduxForm)
*/


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

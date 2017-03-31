import React, { Component } from 'react';

import {
	ControlLabel,
	FormControl,
	FormGroup
} from 'react-bootstrap';

export default class PostsForm extends Component {

	render() {

		const { input: {value, onSubmit }} = this.props;

		console.log('PostsForm props =', this.props);

		return (

			<form onSubmit = {onSubmit} >
				<ControlLabel>Title</ControlLabel>
				<FormControl
					type="text"
					placeholder="Enter a title for your post"
				/>
				<ControlLabel>Categories</ControlLabel>
				<FormControl
					type="text"
					placeholder="Enter categories"
				/>
				<button
					type= "submit"
					className= "btn btn-primary">Submit
				</button>

			</form>
		);
	}

}
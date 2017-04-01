import React, { Component } from 'react';

import {
	ControlLabel,
	FormControl,
	FormGroup
} from 'react-bootstrap';

// Title Input Box for Posts Form
let PostsFormTitle = props => {

	console.log('props =', props);

	const { placeholder, className, type, input, meta } = props;

	return (
		<FormGroup
			controlId={input.name}
			validationState={meta.error ? 'error' : 'success'}>
			<ControlLabel className="form-label">Title</ControlLabel>
			<FormControl 
				className= {className}
				type={type}
				placeholder={placeholder}
				value={input.value}
				onChange={input.onChange}
			/>
			<FormControl.Feedback />
		</FormGroup>
	);
}

export default PostsFormTitle;


/* ORIGINAL VERSION - Created a React Class Component

export default class PostsFormTitle extends Component {

	render() {

		const { placeholder, type, input, meta } = this.props;

		return (
			<FormGroup
				controlId={input.name}
				validationState={meta.error ? 'error' : 'success'}>
				<ControlLabel className="form-label">Title</ControlLabel>
				<FormControl
					type={type}
					placeholder={placeholder}
					value={input.value}
					onChange={input.onChange}
				/>
				<FormControl.Feedback />
			</FormGroup>
		);
	}
}
*/
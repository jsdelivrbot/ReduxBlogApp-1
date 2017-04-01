import React, { Component } from 'react';

import {
	Button,
	ControlLabel,
	FormControl,
	FormGroup
} from 'react-bootstrap';

// Categories Input Box for Posts Form
export default class PostsFormContent extends Component {

	render() {

		const { placeholder, type, input, meta } = this.props;

		return (
			<FormGroup 
				controlId={input.name}
				validationState={meta.error ? 'error' : 'success'}>
				<ControlLabel className="form-label">Content</ControlLabel>
				<FormControl
					type={type}
					componentClass={type}
					placeholder={placeholder}
					value={input.value}
					onChange={input.onChange}
				/>
				<FormControl.Feedback />
			</FormGroup>
		);
	}
}

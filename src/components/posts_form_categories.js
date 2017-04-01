import React, { Component } from 'react';

import {
	ControlLabel,
	FormControl,
	FormGroup
} from 'react-bootstrap';

// Categories Input Box for Posts Form
export default class PostsFormCategories extends Component {

	render() {

		const { placeholder, type, input, meta } = this.props;

		return (
			<FormGroup 
				controlId={input.name}
				validationState={meta.error ? 'error' : 'success'}>
				<ControlLabel className="form-label">Categories</ControlLabel>
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

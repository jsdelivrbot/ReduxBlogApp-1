import React, { Component } from 'react';

import {
	ControlLabel,
	FormControl,
	FormGroup
} from 'react-bootstrap';


export default class PostsForm extends Component {

	render() {

		//console.log('this.props =', this.props);
		// console.log('this.props.input.value =', this.props.value);
		const { placeholder, type, input, meta } = this.props;


		return (
			<FormGroup 
				controlId={input.name}
				validationState={meta.error ? 'error' : 'success'}>
				<ControlLabel>Categories</ControlLabel>
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

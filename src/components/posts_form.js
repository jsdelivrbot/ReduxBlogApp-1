import React, { Component } from 'react';

import {
	ControlLabel,
	FormControl,
	FormGroup
} from 'react-bootstrap';

export default class PostsForm extends Component {

	render() {

		return (
			<div>
				<ControlLabel>Categories</ControlLabel>
				<FormControl
					type="text"
					placeholder="Add categories"
				/>
			</div>
		);
	}

}

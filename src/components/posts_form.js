import React, { Component } from 'react';

import {
	ControlLabel,
	FormControl,
	FormGroup
} from 'react-bootstrap';

export default class PostsForm extends Component {

	/*
	constructor(props) {
		super(props);

		this.state = {
			title: ''
		}
	}

	handleChange = (e) => {
		this.setState({ title: e.target.value });
	}
	*/

	render() {

		const { input: {value, name, onChange }} = this.props;
		console.log('this.props.input =', this.props.input);

		return (
			<form>
				<ControlLabel>Title</ControlLabel>
				<FormControl
					type="text"
					placeholder="Enter a title for your post"
				/>
			</form>
		);
	}

}

/*
	<ControlLabel>Categories</ControlLabel>
	<FormControl
		type="text"
		placeholder="Enter categories"
	/>
*/
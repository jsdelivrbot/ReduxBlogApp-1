import React, { Component } from 'react';

class PostsUpdate extends Component {

	render() {

		console.log('posts_update props = ', this.props);

		return (
			<h3>Inside PostsUpdate</h3>
		);
	}



}

export default connect(null, null)(PostsUpdate);
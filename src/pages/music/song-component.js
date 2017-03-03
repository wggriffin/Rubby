import React, { Component } from 'react';

import './song.css';

class Song extends Component {
	render() {
		return (
			<div className="image-slide">
				{this.props.html}
				<div className="text">{this.props.text}</div>
			</div>
		);
	}
}

export default Song;
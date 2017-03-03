import React, { Component } from 'react';

import './video.css';

class Video extends Component {
	render() {
		return (
			<div className="image-slide">
				{this.props.html}
				<div className="text">{this.props.text}</div>
			</div>
		);
	}
}

export default Video;
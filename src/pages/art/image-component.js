import React, { Component } from 'react';

import './image.css';

class Image extends Component {
	render() {
		return (
			<div className="image-slide">
				<img className="image" src={this.props.src} alt={this.props.text} />
				<div className="text">{this.props.text}</div>
			</div>
		);
	}
}

export default Image;
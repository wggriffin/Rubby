import React, { Component } from 'react';

import Gallery from '../util/gallery-component';

import videos from './videos.js';

class VideoPage extends Component {
	render() {
		videos.forEach((video) => {
			video.headerText = video.title;
		});
		return (
			<Gallery items={videos} type='video' />
		);
	}
}

export default VideoPage;
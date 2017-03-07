import React, { Component } from 'react';

import Image from '../art/image-component';
import Song from '../music/song-component';
import Video from '../video/video-component';

class ItemDispatcher extends Component {
	render() {
		let component;
		if(this.props.type === 'music') {
			component = <Song {...this.props} />;
		} else if(this.props.type === 'art') {
			component = <Image {...this.props} />;
		} else if(this.props.type === 'video') {
			component = <Video {...this.props} />;
		} else {
			throw new Error("item type not recognized");
		}
		return component;
	}
}

export default ItemDispatcher;
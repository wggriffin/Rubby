import React, { Component } from 'react';

import Gallery from '../util/gallery-component';

import songs from './songs';

class Music extends Component {
	render() {
		songs.forEach((song) => {
			song.headerText = song.title;
		});
		return (
			<Gallery items={songs} type='music' />
		);
	}
}

export default Music;
import React from 'react';

class Video {
	constructor(title, html, text) {
		this.title = title;
		this.html = html;
		this.text = text;
	}
}

var videos = [
	new Video('Know Me', 
					  <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/j1GyQDmVmZg" frameBorder="0" allowFullScreen></iframe>,
					  "")
];

export default videos;
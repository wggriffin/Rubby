import React, { Component } from 'react';

import Slideshow from '../util/slideshow-component';
import Gallery from '../util/gallery-component';

import images from './images.js';

class Art extends Component {
	constructor(props) {
		super(props);
		this.state = {view: 'gallery'};
		var count = 1;
		const len = images.length;
		images.forEach((image) => {
			image.headerText = count++ + "/" + len;
		});
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		const switchTo = (this.state.view === 'gallery') ? 'slideshow' : 'gallery';
		const view = (this.state.view === 'gallery') 
										? <Gallery items={images} type='art' />
										: <Slideshow items={images} type='art' /> 
		return (
			<div className='art-page'>
				<div className='switch-header'>
					<div className='switch-header-text'> Switch to: &nbsp;</div>
					<div className='view-switch' onClick={this.handleClick}>
						{switchTo}
					</div>
				</div>
				{view}
			</div>
		);
	}

	handleClick() {
		this.setState((prevState) => {
			const view  = (prevState.view === 'gallery') ? 'slideshow' : 'gallery';
			return {view: view};
		});
	}
}

export default Art;
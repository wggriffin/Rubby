import React, { Component } from 'react';

import { Link } from 'react-router';

import './home.css';

class Home extends Component {
	render() {
		return (
			<div className='home-page'>
				<Link className='home-image-link' to='/main'>
					<img className='home-image' 
							 src='./images/image2.jpg' 
							 alt='home' />
				</Link>
				<Link className='home-header' to='/main'>Enter</Link>
			</div>
		);
	}
}

export default Home;
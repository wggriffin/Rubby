import React, { Component } from 'react';

import NavbarLink from './navbar-link-component';

import routes from '../routes';

import './navbar.css';

class Navbar extends Component {
	render() {
		var key = 0;
		const links = routes.map((route) => {
			if(!route.isHome) {
				const path = '/' + ((route.isIndex) ? route.path : 'main/' + route.path);
				return (
					<NavbarLink to={path} 
											key={key++} 
											className="navbar-link" isIndex={route.isIndex}>
						{route.tag}
					</NavbarLink>
				);
			} else {
				return null;
			}
		});
		return (
			<div className="navbar">
				{links}
			</div>
		);
	}
}

export default Navbar;
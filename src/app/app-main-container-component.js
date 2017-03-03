import React, { Component } from 'react';

import Navbar from '../navbar/navbar-component';

class AppMainContainer extends Component {
	render() {
		return(
			<div>
				<Navbar className="navbar" />
				{this.props.children}
			</div>
		);
	}
}

export default AppMainContainer;
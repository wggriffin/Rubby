import React, { Component } from 'react';

class AppContainer extends Component {
	render() {
		return (
			<div className="app">
				{this.props.children}
			</div>
		);
	}
}

export default AppContainer;
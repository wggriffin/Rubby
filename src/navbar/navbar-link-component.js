import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

class NavbarLink extends Component {
	render() {
		const { isIndex, ...props } = this.props;
		return (isIndex) 
			? <div className="header">
					<IndexLink id="index-link" {...props} />
				</div>
			: <Link id="link" activeClassName={"active"} {...props} />;
	}
}

export default NavbarLink;
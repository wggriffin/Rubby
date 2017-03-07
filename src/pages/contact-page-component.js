import React, { Component } from 'react';

import Card from './util/card-component';

class ContactPage extends Component {
	render() {
		return (
			<Card headerText='Contact' currentItem={""} />
		);
	}
}

export default ContactPage;
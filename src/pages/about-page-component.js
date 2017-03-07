import React, { Component } from 'react';

import Card from './util/card-component';

var aboutText = 'Rubby is an artist, musician......';

class AboutPage extends Component {
	render() {
		return (
			<Card headerText='About' currentItem={aboutText} />
		);
	}
}

export default AboutPage;
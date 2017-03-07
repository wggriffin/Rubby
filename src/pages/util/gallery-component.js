import React, { Component } from 'react';

import Card from './card-component';
import ItemDispatcher from './item-dispatcher-component';

class Gallery extends Component {
	constructor(props) {
		super(props);
		var key = 0;
		this.components = this.props.items.map((item) =>
			<ItemDispatcher {...item} 
						 			    key={key++} 
						 			  	type={this.props.type} />
		);
		this.state = {itemNum: 0};
	}

	render() {
		var key = 0;
		const components = this.components.map((component) =>
			<Card currentItem={component} 
						type={this.type} 
						view='gallery' 
						key={key++}
						itemCount={this.props.items.length}/>
		);
		return <div className='gallery'>{components}</div>;
	}
}

export default Gallery;
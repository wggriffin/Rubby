import React, { Component } from 'react';

import ItemDispatcher from './item-dispatcher-component';
import Card from './card-component';

import './slideshow.css';
import './card.css';

class Slideshow extends Component {
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
		const currentItem = this.components[this.state.itemNum];
		return (
			<Card currentItem={currentItem} 
						type={this.type} 
						headerText={this.props.items[this.state.itemNum].headerText} 
						view='slideshow'
						handleClick={this.handleClick}
						itemCount={this.props.items.length}/>
		);
	}

	handleClick(e, val) {
		console.log(this);
		var newItemNum = this.state.itemNum + val;
		if(newItemNum < 0) 
			newItemNum = this.itemCount - 1;
		if(newItemNum >= this.itemCount) 
			newItemNum %= this.itemCount;
		this.setState((prevState) => {
			return {itemNum: newItemNum};
		});
	}
}

export default Slideshow;
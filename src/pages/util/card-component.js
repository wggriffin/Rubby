import React, { Component } from 'react';

class Card extends Component {
	render() {
		const headerText = (this.props.currentItem) 
													? this.props.currentItem.props.headerText
													: this.props.headerText;
		return (
			<div className={this.props.type + " slideshow card"}>
				<div className="header-text">
					{headerText}
				</div>
				{this.props.currentItem}
			</div>
		);
	}
}

export default Card;
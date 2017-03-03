import React, { Component } from 'react';

class Card extends Component {
	render() {
		const headerText = this.props.currentItem.props.headerText;
		let headerContents;
		if(this.props.view === 'slideshow' && this.props.itemCount > 1) {
			headerContents = 
					(<div className="slideshow-header">
						<div className="prev" onClick={(e) => this.props.handleClick(e, -1)} >&#10094;</div>
							<div className="header-text">
								{headerText}
							</div>
		  			<div className="next" onClick={(e) => this.props.handleClick(e, 1)} >&#10095;</div>
		  		</div>);
		} else {
			headerContents =
				(<div className="header-text">
						{headerText}
				 </div>);
		}
		return (
			<div className={this.props.type + " slideshow card"}>
				{headerContents}
				{this.props.currentItem}
			</div>
		);
	}
}

export default Card;
'use strict';

import 'react-hot-loader'
import React, { Component } from 'react'
import { Link } from 'react-router';

import css from './overlay.scss'

export default class Overlay extends Component {

	constructor(props) {
		super(props)
	}

	render(){
		console.log('< Overlay > :',this.props);
		return (
			<div className={(this.props.children ? css.overlayOn : css.overlayOff)}>
				<div>Overlay page</div>
				{this.props.children}
				<Link to={this.props.route.path} className={css.closeButton}>⮿</Link>
			</div>
        )
	}

}


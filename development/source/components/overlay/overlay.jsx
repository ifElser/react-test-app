'use strict';

import 'react-hot-loader'
import React, { Component } from 'react'
import { Link } from 'react-router'
import Baobab from 'baobab'

import css from './overlay.scss'

export default class Overlay extends Component {

	constructor(props) {
		super(props)
	}

	static contextTypes = {
		store: React.PropTypes.instanceOf(Baobab)
	}

	componentWillUpdate(nextProps, nextState) {
		if(nextProps.children) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}

	render(){


		// console.log('< Overlay > :',this.props);
		return (
			<div className={(this.props.children ? css.overlayOn : css.overlayOff)}>
				<div>
					Overlay page
					{this.props.children}
					<Link to={this.props.route.path} className={css.closeButton}>⮿</Link>
				</div>
			</div>
        )
	}

}


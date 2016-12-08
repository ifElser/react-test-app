'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// import Routes from './routes'

import css from './main-layout.scss'

export default class MainLayout extends Component {

	constructor(props) { super(props); }

	render(){
		console.log(this.props)
		let children =  this.props.children instanceof Array ? this.props.children : [this.props.children];
		return (
		    <div>
		    	<header>
		    		header
		    	</header>
			    <div className={css.mainLayout}>
					{this.props.main}
				</div>
				{this.props.overlay}
			</div>
		)
	}

}


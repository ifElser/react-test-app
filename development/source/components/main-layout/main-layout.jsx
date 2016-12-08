'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

// import Routes from './routes'

import css from './main-layout.scss'

export default class MainLayout extends Component {

	constructor(props) { super(props); }

	render(){
		console.log(css)
		let children =  this.props.children instanceof Array ? this.props.children : [this.props.children];
		return (
		    <div>
		    	<header>
		    		<Link to='/' className={css.headerLink} activeClassName={css.active}>Posts</Link>
		    		<Link to='/albums' className={css.headerLink} activeClassName={css.active}>Albums</Link>
		    	</header>
			    <div className={css.mainLayout}>
					{this.props.main}
				</div>
				{this.props.overlay}
			</div>
		)
	}

}


'use strict';

import 'react-hot-loader'
import React, { Component } from 'react'

import css from './post.scss'

export default class Post extends Component {

	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className={css.post}>
				<div>Post page</div>
			</div>
        )
	}

}


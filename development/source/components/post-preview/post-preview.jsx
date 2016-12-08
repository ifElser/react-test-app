'use strict';

import React, { Component } from 'react'
import { Link } from 'react-router'
import Baobab from 'baobab'

import css from './post-preview.scss'

export default class PostPreview extends Component {

	constructor(props) { super(props) }

	render(){
		return (
			<Link to={`/posts/${this.props.data.id}`}>
				<div className={css.postPreview}>
					<h4>{this.props.data.title}</h4>
					<p>{this.props.data.body}</p>
				</div>
			</Link>
        )
	}

}


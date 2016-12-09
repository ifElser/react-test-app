'use strict';

import React, { Component } from 'react'
import { Link } from 'react-router'
import Baobab from 'baobab'

import css from './post-preview.scss'

export default class PostPreview extends Component {

	constructor(props) { super(props) }

	render(){

		if(!this.props.post || !this.props.user) return null;

		return (

				<div className={css.postPreview}>
					<h4>
						<Link to={`/${this.props.user.username}`}>
							<span>{this.props.user.username}</span>
						</Link>{' : '}
						{
							this.props.activeTitle
							? <Link to={`/posts/${this.props.post.id}`}>{this.props.post.title}</Link>
							: this.props.post.title
						}
					</h4>
					<p>{this.props.post.body}</p>
				</div>

        )
	}

}


'use strict';

import 'react-hot-loader'
import React, { Component } from 'react'
import Baobab from 'baobab'
import PostPreview from '../post-preview'
import Comment from '../comment'

import actions from './post.actions.js'
import css from './post.scss'

const keys = Object.keys;

export default class Post extends Component {

	constructor(props) {
		super(props);
	}

	static contextTypes = {
		store: React.PropTypes.instanceOf(Baobab)
	}

	componentWillMount() {
		let comments = this.context.store.select('comments').get(this.props.params.postId)
		if(!comments || !keys(comments).length) actions(this.context.store).loadComments(this.props.params.postId)
	}

	render(){

		let post = this.context.store.select('posts').get(this.props.params.postId)
		let user = !!post && this.context.store.select('users').get(post.userId)
		let comments = this.context.store.select('comments', this.props.params.postId).get()

		return (
			<div className={css.post}>
				<PostPreview user={user} post={post}/>
				<div className={css.commentsLabel}>Comments:</div>
				{!!comments && keys(comments).map( (comment, id) => <Comment key={id} data={comments[comment]}></Comment>)}
			</div>
        )
	}

}


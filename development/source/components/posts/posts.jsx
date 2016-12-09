'use strict';

import React, { Component } from 'react'
import Baobab from 'baobab'
import PostPreview from '../post-preview'

import actions from './posts.actions.js'

const keys = Object.keys;

export default class Posts extends Component {

	constructor(props) { super(props) }

	static contextTypes = {
		store: React.PropTypes.instanceOf(Baobab)
	}

	componentWillMount() {
		let posts = this.context.store.select('posts').get()
		if(!keys(posts).length) actions(this.context.store).loadPosts()
	}

	render(){

		let posts = this.context.store.select('posts').get()
		let users = this.context.store.select('users').get()

		return (
			<div>
				<div>Posts page</div>
				{keys(posts).map(id => <PostPreview key={id} user={users[posts[id].userId]} post={posts[id]} activeTitle={true}/>)}
				{this.props.children}
			</div>
        )
	}

}


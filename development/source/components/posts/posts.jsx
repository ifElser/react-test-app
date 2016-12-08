'use strict';

import React, { Component } from 'react'
import Baobab from 'baobab'

import PostPreview from '../post-preview'

import actions from './posts.actions.js'

export default class Posts extends Component {

	constructor(props) { super(props) }

	static contextTypes = {
		store: React.PropTypes.instanceOf(Baobab)
	}

	componentWillMount() {
		let posts = this.context.store.select('posts').get()
		if(!posts.length) actions(this.context.store).load()
	}

	render(){
		let posts = this.context.store.select('posts').get().map((post, key) => <PostPreview key={key} data={post}/>)

		return (
			<div>
				<div>Posts page</div>
				{posts}
				{this.props.children}
			</div>
        )
	}

}


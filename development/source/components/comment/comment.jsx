'use strict';

import React, { Component } from 'react'
import { Link } from 'react-router'

import css from './comment.scss'

export default class PostPreview extends Component {

	constructor(props) { super(props) }

	render(){

		console.log(this.props)

		return (

				<div className={css.comment}>
					<h4><span>{this.props.data.email}</span> : </h4>
					<h5><span>{this.props.data.name}</span></h5>
					{this.props.data.body}

				</div>

        )
	}

}


'use strict';

import 'react-hot-loader'
import React, { Component } from 'react'

export default class Albums extends Component {

	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<div>Albums page</div>
				{this.props.children}
			</div>
        )
	}

}


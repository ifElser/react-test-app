'use strict';

import 'react-hot-loader'
import React, { Component } from 'react'

export default class Profile extends Component {

	constructor(props) {
		super(props)
	}

	render(){
		console.log(this.props);
		return (
			<div>
				<div>Profile page</div>
			</div>
        )
	}

}


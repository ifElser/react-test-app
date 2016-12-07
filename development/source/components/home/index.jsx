'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import css from './home.scss'

export default class App extends Component {

	constructor(props) {
		super(props);
	}

	render(){
		console.log('CSS:', css);
		return <div className={css.home}>Home page</div>;
	}

}

if(typeof window !== 'undefined' && typeof document !== 'undefined'){
	ReactDOM.render(<App/>, document.getElementById('approot'));
}

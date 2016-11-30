'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from '../../routes'

export default class App extends Component {

	constructor(props) { super(props); }

	render(){
		return <Router routes={routes} history="browserHistory"/>;
	}

}

if(typeof window !== 'undefined' && typeof document !== 'undefined'){
	ReactDOM.render(<App/>, document.getElementById('approot'));
}

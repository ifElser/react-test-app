'use strict';

import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import App from './app';

export default class Page extends Component {

	constructor(props){
		super(props);
	}

	render(){
		let scripts = [];
		let styles = [];
		this.props.chunks.forEach(chunk => {
			let chunkFiles = chunk.files.forEach(file => {
				if(/\.js$/.test(file)) scripts.push(<script type="text/javascript" src={`file?v=${chunk.hash}`}/>);
				if(/\.css$/.test(file)) styles.push(<link href={`file?v=${chunk.hash}`} rel="stylesheet" media="all"/>);
			});
		});

		return (

		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<title>this.props.title</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{styles}
			</head>
			<body>
				<div id="approot">
					<App />
				</div>
				{scripts}
			</body>
		</html>

		);
	}

};

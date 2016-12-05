'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Home from './components/home';
// import Home from './components/home';
// import Posts from './components/posts';
// import Post from './components/post';
// import Albums from './components/albums';
// import Album from './components/album';
// import Photo from './components/photo';
// import User from './components/user';
// import NoMatch from './components/404';

export default routes = (
	<Route path="/" component={Home}>
		{/*<IndexRoute path="/" component={Posts}>
			<Route path="/:postId" component={Post}/>
		</IndexRoute>
		<Route path="/user/:userId" component={User}/>
			<Route path="/albums" component={Albums}>
				<Route path="/albums/:albumId/" component={Album}>
					<Route path="/albums/:albumId/:photoId" component={Photo}/>
				</Route>
			</Route>
			<Route path="/:postId" component={Post}/>
		</Route>
		<Route path="*" component={NoMatch}/>*/}
	</Route>
)

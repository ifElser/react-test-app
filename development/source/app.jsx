'use strict';

// system
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import Baobab from 'baobab'

// store
import Store from './store'

// app layout
import MainLayout from './components/main-layout'
import Overlay from './components/overlay'

// pages
import Posts from './components/posts'
import Albums from './components/albums'
import Profile from './components/profile'

// page sections
import Post from './components/post'
import Galery from './components/galery'
import NoMatch from './components/404'

// global styles
import './app.scss'

/**
 * P.S.
 * Routes declared outside App component for avoid react-router v3.0 issue, described here:
 * https://github.com/reactjs/react-router-redux/issues/179
 * It seems like issue actual only for development environment, when HMR enabled, so...
 */

	// TODO: refactor to env depended code

const routes = (
	<Route component={MainLayout} >
		<Route path="/" components={{ main: Posts, overlay: Overlay }} >

			{/*popup with post*/}
			<Route path="/posts/:postId" component={Post} />
			<Redirect from="/posts" to="/" />
		</Route>

		{/*albums page*/}
		<Route path="/albums" components={{ main: Albums, overlay: Overlay }} >

			{/*popup with album galery*/}
			<Route path=":albumId/:photoId" component={Galery} />
			<Redirect from=":albumId" to="/albums" />

		</Route>

		{/*user profile page*/}
		<Route path="/:userId" components={{ main: Profile, overlay: Overlay }} >

			{/*popup with post*/}
			<Route path="posts/:postId" component={Post} />
			<Redirect from="posts" to="/:userId" />


			{/*popup with album galery*/}
			<Route path="albums/:albumId/:photoId" components={Galery} />
			<Redirect from="albums" to=":userId" />
			<Redirect from="albums/:albumId" to="/:userId" />

		</Route>

		{/*Not found 404 page*/}
		<Route path="*" components={{main: NoMatch}} />
	</Route>

)

class App extends Component {

	constructor(props) { super(props); console.log(this) }

	static propTypes = {
		store: React.PropTypes.instanceOf(Baobab)
	}

	static childContextTypes = {
		store: React.PropTypes.instanceOf(Baobab)
	}

	getChildContext() {
		return {
			store: this.props.store
		}
	}

	render() {
		/**
		 *
		 * ...yes, in current implementation, user with login "albums" or "posts" can not be created,
		 * but from other side, we are avoid using to long url`s for profiles posts and albums
		 * so routes looks like that:
		 *
		 * /                         - all posts                                      (instead /posts)
		 * /albums                   - all albums
		 * /posts/23                 - for post from main page with posts
		 * /albums/12/332            - for photo 332 in album 12                      (instead /albums/12/photo/332)
		 * /someuser                 - for someuser profile                           (instead /user/someuser)
		 * /someuser/posts/56        - for post 56 of user someuser                   (instead /user/someuser/posts/56)
		 * /someuser/albums/48/123   - for photo 123 from album 48 of user someuser   (instead /user/someuser/albums/48/photo/123)
		 *
		 * but trying navigate to wrong url`s will be redirected to right location in cases like that:
		 *
		 * /posts              to /          because view post with no post selected is no sence
		 * /albums/31          to /albums    because view album with no photo selected is no sence
		 * /someuser/posts     to /someuser  because view user post with no post selected is no sence
		 * /someuser/albums    to /someuser  because view user album with no album selected is no sence
		 * /someuser/albums/72 to /someuser  because view user album with no photo selected is no sence
		 *
		 * in other cases url`s, with data, which not found in store, will be routed to 404 page
		 *
		 */
		return (
	        <Router history={browserHistory}>
	        	{routes}
			</Router>
	    )
	}
}

// typeof document !== 'undefined' &&
Store.on('update', () => {
	ReactDOM.render( <App store={Store}/>, document.getElementById('approot') )
})

Store.emit('update')

export default App

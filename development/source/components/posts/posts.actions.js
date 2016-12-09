'use strict';

// import oboe from 'oboe'
import {status, json} from '../../utils/fetch-utils.js'

export default function actions (Store) {
	return {
		loadPosts: () => {

			let Posts = Store.select('posts');
			let Users = Store.select('users');

			fetch('/api/posts')
			.then(status)
			.then(json)
			.then(posts => {
				fetch('/api/users')
			    .then(status)
				.then(json)
				.then(users => {
					console.log('!!!', {posts, users});
					Posts.set(posts.reduce( (result, post) => {
						result[post.id] = post;
						return result
					}, {} ));
					Users.set(users.reduce( (result, user) => {
						result[user.id] = user;
						return result
					}, {} ));
				})
				.catch(error => console.error(error.message))
			})
			.catch(error => console.error(error.message))

			// return require('./posts.json');

			// let usersIds = {}, posts = {};
			// // console.log('loading posts...');

			// oboe('/api/posts').node('{userId}', post => {
			// 	// console.log(`POST loaded: ID = ${post.id}, user ID = ${post.userId}`)
			// 	if(!Posts.get(post.id)) {
			// 		posts[post.id] = post;
			// 		if(!Users.get(post.userId) && !(post.userId in usersIds)) usersIds[post.userId] = true;
			// 	}
			// }).done(() => {
			// 	Object.keys(usersIds).forEach(id => {
			// 		oboe(`/api/users/${id}`).node('{username}', user => {
			// 			// console.log(`USER loaded: Name = ${user.name}, ID = ${user.id}`);
			// 			Users.set(user.id, user)
			// 		});
			// 	});
			// 	Posts.merge(posts);
			// });

				// Promise.all(
				//     posts
				// 	.reduce( (ids, post) => {
				// 		if(!ids[post.userId]){
				// 			ids[post.userId] = true;
				// 			ids.urls.push(`/api/users/${post.userId}`)
				// 		}
				// 		return ids;
				// 	}, {urls:[]})
				// 	.urls
				// 	.map(url => fetch(url))
				// )
				// .then(json)
				// .then(users => {
				// })

				// return {
				// 	posts,
				// 	userIds: posts.reduce( (ids, post) => {
				// 		ids[post.userId] || ids[post.userId] = true;
				// 		return ids;
				// 	}, {})
				// }
				// Store.select('posts').set(posts);
			// .then(data => {

			// })
				// .catch(error => console.error(error.message))

		}
	}
}

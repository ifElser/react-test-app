'use strict';

import {status, json} from '../../utils/fetch-utils.js'

export default function actions (Store) {
	return {
		load: () => {
			// return require('./posts.json');
			fetch('/api/posts').then(status).then(json).then(data => {
				console.log('!>', data)
				Store.select('posts').set(data);
			}).catch(error => console.error(error.message))
		}
	}
}

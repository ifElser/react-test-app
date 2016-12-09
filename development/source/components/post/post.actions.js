'use strict';

// import oboe from 'oboe'
import {status, json} from '../../utils/fetch-utils.js'

export default function actions (Store) {
	return {
		loadComments: id => {

			let Comments = Store.select('comments');

			fetch(`/api/posts/${id}/comments`)
			.then(status)
			.then(json)
			.then(comments => {
				console.log('COMMENTS:', comments)
				Comments.set(id, comments.reduce( (result, comment) => {
					result[comment.id] = comment;
					return result
				}, {} ))
			})
			.catch(error => console.error(error.message))

		}
	}
}

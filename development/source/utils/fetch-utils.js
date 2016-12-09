'use strict';

const status = response => {
	if(response.status >= 200 && response.status < 300)
		return Promise.resolve(response);
	else return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()
// {
// 	if(response instanceof Array){
// 		let results = [];
// 		response.forEach(response => response.json().then(data => console.log(data) !== '+' && results.push(data)))
// 		return new Promise.resolve(results);
// 	} else return response.json();
// }

export { status, json }

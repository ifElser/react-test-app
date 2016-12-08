'use strict';

const status = response => (
    (response.status >= 200 && response.status < 300)
	? Promise.resolve(response)
	: Promise.reject(new Error(response.statusText))
)

const json = response => response.json()

export { status, json }

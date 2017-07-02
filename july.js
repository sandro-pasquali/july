'use strict';

let july = require('wikijs').default().page('july');

module.exports = {
	data : () => july.then(page => page.content()),
	images : () => july.then(page => page.images())
};
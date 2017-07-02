'use strict';

let july = require('../../july.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return july.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return july.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};



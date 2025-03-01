'use strict';

var lodashEs = require('lodash-es');

var foo = "hello world";

function main() {
    console.log(foo);
    console.log(lodashEs.sum([1, 2, 3]));
}

module.exports = main;

"use strict";

var fs = require('fs');
var gen = require('./generators');
var argv = require('minimist')(process.argv.slice(2));
var availableGenerators = gen.find(argv);

console.dir(argv);
console.dir(availableGenerators);
console.dir(availableGenerators.length);

if (availableGenerators.length < 1) {
    return;
}

require(availableGenerators[0].path);

console.log('file generated');

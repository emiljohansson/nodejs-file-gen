"use strict";

var gen = require('./generators');
var argv = require('minimist')(process.argv.slice(2));
var availableGenerators = gen.find(argv);
if (availableGenerators.length < 1) {
    return;
}
require(availableGenerators[0].path);

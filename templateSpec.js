"use strict";

var assert = require("assert");
var factoryMethod = require('./{fileName}');

describe('{fileName}', function() {
    it("should exist", function() {
        assert.equal(typeof factoryMethod, 'function');
        assert.equal(typeof factoryMethod(), 'object');
    });
});

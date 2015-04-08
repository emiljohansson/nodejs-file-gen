"use strict";

var assert = require("assert");
var filterMethod = require('./{fileName}');

describe('{fileName}', function() {
    it("should exist", function() {
        assert.equal(typeof filterMethod, 'function');
    });

    it("should modify item", function() {
        assert.equal(typeof filterMethod(), 'undefined');
    });
});

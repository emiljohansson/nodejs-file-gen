var assert = require("assert");
describe('File Name', function() {
    'use strict';

    var factoryMethod = require('./{fileName}');

    it("should exist", function() {
        assert.equal(typeof factoryMethod, 'function');
        assert.equal(typeof factoryMethod(), 'object');
    });
});

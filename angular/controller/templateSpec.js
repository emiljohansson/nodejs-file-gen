"use strict";

var assert = require('assert');
var factoryMethod = require('./{fileName}');

describe('{fileName}', function() {
    it('should exist', function() {
        assert.equal(typeof factoryMethod, 'function');
        assert.equal(typeof factoryMethod(), 'object');
    });

    it('should have properties', function() {
        var ctrl = factoryMethod();
        assert.equal(typeof ctrl.aVar, 'string');
    });

    it('should have functions', function() {
        var ctrl = factoryMethod();
        assert.equal(typeof ctrl.aMethod, 'function');
    });

    it('should work new', function() {
        var ctrl = new factoryMethod();
        assert.equal(typeof ctrl.aMethod, 'function');
    });
});

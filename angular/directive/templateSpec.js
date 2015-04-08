"use strict";

var assert = require("assert");
var factoryMethod = require('./{fileName}');

describe('{fileName}', function() {
    it("should exist", function() {
        assert.equal(typeof factoryMethod, 'function');
        assert.equal(typeof factoryMethod(), 'object');
    });

    it("should have functions", function() {
        var dir = factoryMethod();
        assert.equal(typeof dir.controller, 'function');
        assert.equal(typeof dir.link, 'function');
    });

    describe('Controller', function() {
        it("should have properties", function() {
            var dir = factoryMethod();
            var ctrl = dir.ctrl();
            assert.equal(typeof ctrl.aVar, 'string');
        });

        it("should have functions", function() {
            var dir = factoryMethod();
            var ctrl = dir.ctrl();
            assert.equal(typeof ctrl.aMethod, 'function');
        });
    });

    describe('Link', function() {
        it("should append properties", function() {
            var dir = factoryMethod();
            var scope = {};
            dir.link(scope);
            assert.equal(typeof scope.aVar, 'string');
        });
    });
});

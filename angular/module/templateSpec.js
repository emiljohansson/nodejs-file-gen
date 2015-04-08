"use strict";

var assert = require("assert");
var index = require('./');

describe('{fileName}', function() {
    it('should return name of module ', function() {
        assert.equal(index.moduleName, 'module-definition');
    });
});

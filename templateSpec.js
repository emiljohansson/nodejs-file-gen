describe('File Name', function() {
    'use strict';

    var factoryMethod = require('./{fileName}');

    it("should exist", function() {
        expect(typeof factoryMethod).toBe('function');
        expect(typeof factoryMethod()).toBe('object');
    });
});

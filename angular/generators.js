"use strict";

var fs = require('fs');
var path = require('path');
var generator = require('./generator');

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function getAll() {
    var dirList = getDirectories(__dirname);
    return dirList.map(function(name) {
        return generator(name);
    });
}

exports.getAll = getAll;

exports.find = function(argv) {
    var result = getAll().filter(function(generator) {
        var found = Object.keys(argv).filter(function(arg) {
            return generator.name === arg || generator.short === arg;
        });
        if (found.length < 1) {
            return;
        }
        return generator;
    });
    return result;
};

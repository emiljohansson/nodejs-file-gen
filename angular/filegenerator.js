"use strict";

exports = module.exports = createFile;

var fs = require('fs');
var args = process.argv.slice(2);

function createFile(fileTemplatePath, specTemplatePath) {
    var dir = (function() {
        if (args.length < 1) return "";
        if (args[0].indexOf('--') < 0) return args[0];
        return "";
    }());
    var fileName = (function() {
        if (args.length < 2) return "";
        if (args[1].indexOf('--') < 0) return args[1];
        return "fileName";
    }());
    var fullPath = process.cwd() + '/' + dir + '/' + fileName + '.js';
    var fullPathSpec = process.cwd() + '/' + dir + '/' + fileName + 'Spec.js';
    var today = new Date().toDateString();
    var author = "John Doe";
    var version = "1.0.0";

    //Set author from project package file.
    fs.readFile(process.cwd() + '/package.json', 'utf8', function(err, data) {
        if (err) return console.log(err);
        author = JSON.parse(data).author;
        version = JSON.parse(data).version;
    });

    //Read template and replace author and date
    fs.readFile(fileTemplatePath, 'utf8', function(err, data) {
        if (err) return console.log(err);
        var re = new RegExp("{fileName}", 'g');
        data = data.replace(re, fileName);
        data = data.replace("{author}", author);
        data = data.replace("{version}", version);
        data = data.replace("{date}", today);
        generate(data, fullPath);
    });

    //Read spec template
    fs.readFile(specTemplatePath, 'utf8', function(err, data) {
        if (err) return console.log(err);
        var re = new RegExp("{fileName}", 'g');
        data = data.replace(re, fileName);
        generate(data, fullPathSpec);
    });

    //Create file
    function generate(template, path) {
        fs.writeFile(path, template, function(err) {
            if (err) return console.log(err);
            console.log(path + ' was generated.');
        });
    }
}

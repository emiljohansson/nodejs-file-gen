"use strict";

module.exports = function(dirName) {
    return {
        name: dirName,
        path: __dirname+'/'+dirName,
        short: dirName.substring(0, 1)
    };
};

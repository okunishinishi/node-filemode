/**
 * Change file permissions.
 * @function filemode
 * @param {string|string[]} pattern - File name pattern.
 * @param {string} mode - File permission string.
 * @param {object} options - Optional settings.
 * @parma {string} [options.cwd=process.cwd()] - Working directory path.
 * @param {function} callback - Callback when done.
 */

"use strict";

var async = require('async'),
    argx = require('argx'),
    fs = require('fs'),
    path = require('path'),
    expandglob = require('expandglob');

/** @lends filemode */
function filemode(pattern, mode, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function');
    var modes = args.shift('object') || {};
    pattern = args.shift('string');
    mode = args.shift('string|number');
    if (pattern && mode) {
        modes[pattern] = mode;
    }
    options = args.pop('object') || {};

    var cwd = options.cwd || process.cwd();
    async.eachSeries(Object.keys(modes), function (pattern, callback) {
        var mode = modes[pattern];
        async.waterfall([
            function (callback) {
                expandglob(pattern, {
                    cwd: cwd
                }, callback);
            },
            function (filenames, callback) {
                async.eachSeries(filenames, function (filename, callback) {
                    fs.chmod(path.resolve(cwd, filename), mode, callback);
                }, callback);
            }
        ], callback);
    }, function (err) {
        callback(err);
    });
}

module.exports = filemode;
